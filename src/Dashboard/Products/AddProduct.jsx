import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import {
  Box,
  Typography,
  Paper,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  Autocomplete,
  Button,
} from '@mui/material';
import { BiImageAdd } from 'react-icons/bi';

function AddProduct() {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState([]);
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');
  const [discount, setDiscount] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = Cookies.get('token');
    if (!token) {
      // Handle unauthorized access
      return;
    }

    const formData = new FormData();
    formData.append('productName', productName);
    formData.append('productDescription', productDescription);
    formData.append('category', category);
    formData.append('tags', JSON.stringify(tags));
    formData.append('brand', brand);
    formData.append('price', price);
    formData.append('discount', discount);
    formData.append('image', image);

    try {
      const response = await axios.post('/api/products', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        // Product added successfully
        console.log('Product added successfully:', response.data);
      } else {
        // Handle error adding product
      }
    } catch (error) {
      // Handle error
    }
  };

  const imageInput = React.createRef();

  return (
    <Box sx={{ pt: '80px', pb: '20px' }}>
      <Typography variant="h6" sx={{ marginBottom: '14px' }}>
        Add Product
      </Typography>
      <Paper
        sx={{
          boxShadow: 'none !important',
          borderRadius: '12px',
          borderStyle: 'solid',
          borderWidth: '1px',
          borderColor: 'divider',
          p: '20px',
          maxWidth: '800px',
          margin: '0 auto',
          cursor: 'pointer',
          overflow: 'hidden',
        }}
      >
        <form onSubmit={handleSubmit}>
          <Box sx={{ my: 2 }}>
            <TextField
              label="Product Name"
              variant="outlined"
              size="small"
              fullWidth
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </Box>
          <Box sx={{ mt: 4 }}>
            <TextField
              label="Product Description"
              variant="outlined"
              rows={4}
              fullWidth
              multiline
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
            />
          </Box>
          <Box sx={{ mt: 4 }}>
            <FormControl fullWidth size="small">
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                {/* Render your categories options here */}
              </Select>
            </FormControl>
          </Box>
          {/* Tags component */}
          <Box>
            <Autocomplete
              sx={{ mt: 4 }}
              multiple
              id="tags-filled"
              options={[]}
              value={tags}
              onChange={(e, newValue) => setTags(newValue)}
              freeSolo
              renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                  <Chip
                    variant="standard"
                    label={option}
                    {...getTagProps({ index })}
                  />
                ))
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  helperText="Select a tag or type any tag and press enter"
                  variant="outlined"
                  label="Product Tags"
                  placeholder="Product Tags"
                />
              )}
            />
          </Box>
          <Box sx={{ mt: 4 }}>
            <TextField
              label="Brand"
              variant="outlined"
              size="small"
              fullWidth
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
          </Box>
          <Box sx={{ mt: 4, display: 'flex', alignItems: 'center', gap: 4 }}>
            <TextField
              label="Price"
              variant="outlined"
              fullWidth
              size="small"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <TextField
              label="Discount"
              variant="outlined"
              fullWidth
              size="small"
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
            />
          </Box>
          <input
            type="file"
            hidden
            ref={imageInput}
            onChange={(e) => setImage(e.target.files[0])}
          />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              mt: '30px',
            }}
          >
            <Button
              variant="contained"
              type="submit"
              sx={{ borderRadius: '20px' }}
            >
              Submit
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
}

export default AddProduct;
