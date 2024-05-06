import React, { useState, useEffect } from "react";
import axios from "../../Components/api/axios";
import Cookies from "js-cookie";
import {
  Box,
  Typography,
  Paper,
  TextField,
  FormControl,
  InputLabel,
  Select,
  Button,
} from "@mui/material";

function AddProduct() {
  // Initialize product state with default values
  const [product, setProduct] = useState({
    product_name: "",
    product_description: "",
    product_price: "",
    product_stock: "",
    product_rating: "",
    product_feedback: "",
    product_image: null,
    product_review: "",
    product_banner: null,
    category_id: "", // Initialize category_id to an empty string
  });
  const [categories, setCategories] = useState([]); // State to store categories data

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [imagePreview, setImagePreview] = useState(null);

  // Fetch categories data when component mounts
  useEffect(() => {
    fetchData();
  }, []);

  // Function to fetch categories data from the API
  const fetchData = async () => {
    try {
      const token = Cookies.get("token");
      console.log("Fetching data...");
      const response = await axios.get("/category", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Response:", response.data);
      setCategories(response.data.data);
    } catch (error) {
      console.error("Error fetching category data:", error);
      setCategories([]);
    }
  };

  // Function to handle form input changes
  const handleInput = (e) => {
    e.persist();
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = Cookies.get("token");
    if (!token) {
      setErrorMessage("Unauthorized access. Please login.");
      return;
    }

    const formData = new FormData();
    // Append product data to FormData object
    for (const key in product) {
      formData.append(key, product[key]);
    }

    try {
      const response = await axios.post("/product", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        // Reset product state to clear form fields after successful submission
        setProduct({
          product_name: "",
          product_description: "",
          product_price: "",
          product_stock: "",
          product_rating: "",
          product_feedback: "",
          product_image: null,
          product_review: "",
          product_banner: null,
          category_id: "",
        });
        // Product added successfully
        setSuccessMessage("Product added successfully.");
        console.log("Product added successfully:", response.data);
      } else {
        // Handle error adding product
      }
    } catch (error) {
      // Handle error
    }
  };

  return (
    <div style={{ width: "900px", display: "flex", justifyContent: "center" }}>
      <Box sx={{ pt: "80px", pb: "20px" }}>
        <Typography variant="h6" sx={{ marginBottom: "14px" }}>
          Add Product
        </Typography>
        <Paper
          sx={{
            boxShadow: "none !important",
            borderRadius: "12px",
            borderStyle: "solid",
            borderWidth: "1px",
            borderColor: "divider",
            p: "20px",
            maxWidth: "800px",
            margin: "0 auto",
            cursor: "pointer",
            overflow: "hidden",
          }}
        >
          <form onSubmit={handleSubmit}>
            <Box sx={{ my: 2 }}>
              <TextField
                label="Product Name"
                variant="outlined"
                size="small"
                fullWidth
                name="product_name"
                value={product.product_name}
                onChange={handleInput}
              />
            </Box>
            <Box sx={{ mt: 4 }}>
              <TextField
                label="Product Description"
                variant="outlined"
                rows={4}
                fullWidth
                multiline
                name="product_description"
                value={product.product_description}
                onChange={handleInput}
              />
            </Box>
            <Box sx={{ mt: 4 }}>
              <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Category"
                  value={product.category_id}
                  onChange={(e) =>
                    setProduct({ ...product, category_id: e.target.value })
                  }
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.category_title}
                    </option>
                  ))}
                </Select>
              </FormControl>
            </Box>
            {/* Tags component */}

            <Box sx={{ mt: 4 }}>
              <TextField
                label="Brand"
                variant="outlined"
                size="small"
                fullWidth
                value={product.product_feedback}
                onChange={handleInput}
              />
            </Box>
            <Box
              sx={{
                mt: 4,
                display: "flex",
                alignItems: "center",
                gap: 4,
              }}
            >
              <TextField
                label="Price"
                variant="outlined"
                fullWidth
                size="small"
                value={product.product_price}
                onChange={handleInput}
              />
              <TextField
                label="Discount"
                variant="outlined"
                fullWidth
                size="small"
                value={product.product_review}
                onChange={handleInput}
              />
            </Box>
            <input
              type="file"
              hidden
              value={product.product_image}
              onChange={handleInput}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mt: "30px",
              }}
            >
              <Button variant="contained" type="submit" sx={{ borderRadius: "20px" }}>
                Upload
              </Button>
            </Box>
          </form>
        </Paper>
      </Box>
    </div>
  );
}

export default AddProduct;
