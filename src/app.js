const express = require('express');
const morgan = require('morgan'); // <-- BARU (Langkah 2)
const app = express();

// Middlewares
app.use(express.json());
app.use(morgan('dev')); // <-- BARU (Langkah 2)

app.get('/', (req, res) => {
  res.json({ message: 'API Ready 🚀' });
});

// Routes
const productRoutes = require('./routes/products.routes');
app.use('/api/products', productRoutes);

// Error Handler (PENTING: harus ditaruh di paling akhir, setelah routes)
const errorHandler = require('./middlewares/errorHandler'); // <-- BARU (Langkah 4)
app.use(errorHandler); // <-- BARU (Langkah 4)

app.listen(3000, () => console.log('Server running on port 3000'));