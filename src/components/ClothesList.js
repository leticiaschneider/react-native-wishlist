
const clothes = [
  { 
    id: 1, 
    text: "Cutout V-neck Geo & Striped Print Top", 
    liked: false, 
    tag: "Blouses", 
    pathImage: require('./../../assets/models/blouse1.jpg') 
  },
  { 
    id: 2, 
    text: "Windowpane Plaid Rolled Cuff Blouse", 
    liked: false, 
    tag: "Blouses", 
    pathImage: require('./../../assets/models/blouse2.jpg') 
  },
  { 
    id: 3, 
    text: "Knot Cuff Solid Blouse", 
    liked: false, 
    tag: "Blouses", 
    pathImage: require('./../../assets/models/blouse3.jpg') 
  },
  { 
    id: 4, 
    text: "Solid Flounce Sleeve Blouse", 
    liked: false, 
    tag: "Blouses", 
    pathImage: require('./../../assets/models/blouse4.jpg') 
  },
  { 
    id: 5, 
    text: "Gathered Waist Curved Hem Longline Blouse", 
    liked: false, 
    tag: "Blouses", 
    pathImage: require('./../../assets/models/blouse5.jpg') 
  },
  { 
    id: 6, 
    text: "Faux Pearl Self-Tie Split Sleeve Top", 
    liked: false, 
    tag: "Blouses", 
    pathImage: require('./../../assets/models/blouse6.jpg') 
  },
  { 
    id: 7, 
    text: "Scallop Trim Keyhole Gold Print Top", 
    liked: false, 
    tag: "Blouses", 
    pathImage: require('./../../assets/models/blouse7.jpg') 
  },
  { 
    id: 8, 
    text: "Letter Graphic Drop Shoulder Crop Tee", 
    liked: false, 
    tag: "T-Shirts", 
    pathImage: require('./../../assets/models/t-shirt1.jpg') 
  },
  { 
    id: 9, 
    text: "V-neck Split Side Solid Tee", 
    liked: false, 
    tag: "T-Shirts", 
    pathImage: require('./../../assets/models/t-shirt2.jpg') 
  },
  { 
    id: 10, 
    text: "Asymmetrical Hem Button Detail Solid Tee", 
    liked: false, 
    tag: "T-Shirts", 
    pathImage: require('./../../assets/models/t-shirt3.jpg') 
  },
  { 
    id: 11, 
    text: "Waffle Knit V Neck Solid Tee", 
    liked: false, 
    tag: "T-Shirts", 
    pathImage: require('./../../assets/models/t-shirt4.jpg') 
  },
  { 
    id: 12, 
    text: "Drop Shoulder Coconut Tree Print Longline Tee", 
    liked: false, 
    tag: "T-Shirts", 
    pathImage: require('./../../assets/models/t-shirt5.jpg') 
  },
  { 
    id: 13, 
    text: "Slogan & Car Print Drop Shoulder Oversized Tee", 
    liked: false, 
    tag: "T-Shirts", 
    pathImage: require('./../../assets/models/t-shirt6.jpg') 
  },
  { 
    id: 14, 
    text: "Letter Graphic Oversized Tee", 
    liked: false, 
    tag: "T-Shirts", 
    pathImage: require('./../../assets/models/t-shirt7.jpg') 
  },
  { 
    id: 15, 
    text: "Lace Up Waist Tank Top", 
    liked: false, 
    tag: "Tank Tops", 
    pathImage: require('./../../assets/models/top1.jpg') 
  },
  { 
    id: 16, 
    text: "Drawstring Side Rib-knit Tank Top", 
    liked: false, 
    tag: "Tank Tops", 
    pathImage: require('./../../assets/models/top2.jpg') 
  },
  { 
    id: 17, 
    text: "Letter Graphic Crop Tank Top", 
    liked: false, 
    tag: "Tank Tops", 
    pathImage: require('./../../assets/models/top3.jpg') 
  },
  { 
    id: 18, 
    text: "Pin Front Letter Graphic Crop Tank Top", 
    liked: false, 
    tag: "Tank Tops", 
    pathImage: require('./../../assets/models/top4.jpg') 
  },
  { 
    id: 19, 
    text: "4 Pack Lettuce Trim Rib-knit Tank Top", 
    liked: false, 
    tag: "Tank Tops", 
    pathImage: require('./../../assets/models/top5.jpg') 
  },
  { 
    id: 20, 
    text: "Drawstring Side Crop Tank Top", 
    liked: false, 
    tag: "Tank Tops", 
    pathImage: require('./../../assets/models/top6.jpg') 
  },
  { 
    id: 21, 
    text: "4 Pack Solid Tank Top", 
    liked: false, 
    tag: "Tank Tops", 
    pathImage: require('./../../assets/models/top7.jpg') 
  },
  { 
    id: 22, 
    text: "Solid Fold Pleat Tailored Pants", 
    liked: false, 
    tag: "Pants", 
    pathImage: require('./../../assets/models/pants1.jpg') 
  },
  { 
    id: 23, 
    text: "Paperbag Waist Knotted Tapered Pants", 
    liked: false, 
    tag: "Pants", 
    pathImage: require('./../../assets/models/pants2.jpg') 
  },
  { 
    id: 24, 
    text: "Solid Pleated Skirt", 
    liked: false, 
    tag: "Skirts", 
    pathImage: require('./../../assets/models/skirt1.jpg') 
  },
  { 
    id: 25, 
    text: "Cutout V-neck Geo & Striped Print Top", 
    liked: false, 
    tag: "Skirts", 
    pathImage: require('./../../assets/models/skirt2.jpg') 
  },
  { 
    id: 26, 
    text: "Solid Elastic Waist Pleated Skirt", 
    liked: false, 
    tag: "Skirts", 
    pathImage: require('./../../assets/models/skirt3.jpg') 
  },
  { 
    id: 27, 
    text: "Swiss Dot Frill Trim Skirt", 
    liked: false, 
    tag: "Skirts", 
    pathImage: require('./../../assets/models/skirt4.jpg') 
  },
  { 
    id: 28, 
    text: "Zipper Back High Waisted PU Skirt", 
    liked: false, 
    tag: "Skirts", 
    pathImage: require('./../../assets/models/skirt5.jpg') 
  },
  { 
    id: 29, 
    text: "Solid Wide Leg Slant Pocket Shorts", 
    liked: false, 
    tag: "Shorts", 
    pathImage: require('./../../assets/models/shorts1.jpg') 
  },
  { 
    id: 30, 
    text: "Belted Paper Bag Waist Shorts", 
    liked: false, 
    tag: "Shorts", 
    pathImage: require('./../../assets/models/shorts2.jpg') 
  },
  { 
    id: 31, 
    text: "Solid Split Front Skort", 
    liked: false, 
    tag: "Shorts", 
    pathImage: require('./../../assets/models/shorts3.jpg') 
  },
  { 
    id: 32, 
    text: "3 Pack Drawstring Waist Track Shorts", 
    liked: false, 
    tag: "Shorts", 
    pathImage: require('./../../assets/models/shorts4.jpg') 
  },
  { 
    id: 33, 
    text: "Slant Pocket Self Belted Shorts", 
    liked: false, 
    tag: "Shorts", 
    pathImage: require('./../../assets/models/shorts5.jpg') 
  },
  { 
    id: 34, 
    text: "Double Breasted Zipper Back Shorts", 
    liked: false, 
    tag: "Shorts", 
    pathImage: require('./../../assets/models/shorts6.jpg') 
  },
  { 
    id: 35, 
    text: "Cold Shoulder Striped Dress", 
    liked: false, 
    tag: "Dresses", 
    pathImage: require('./../../assets/models/dress1.jpg') 
  },
  { 
    id: 36, 
    text: "Lace Up Ditsy Floral Dress", 
    liked: false, 
    tag: "Dresses", 
    pathImage: require('./../../assets/models/dress2.jpg') 
  },
  { 
    id: 37, 
    text: "Ruched Drawstring Side Bodycon Dress", 
    liked: false, 
    tag: "Dresses", 
    pathImage: require('./../../assets/models/dress3.jpg') 
  },
  { 
    id: 38, 
    text: "Pearls Cut-out Sleeve Knot Cuff Dress", 
    liked: false, 
    tag: "Dresses", 
    pathImage: require('./../../assets/models/dress4.jpg') 
  },
  { 
    id: 39, 
    text: "Joyfunear Ruched Drawstring Knot Satin Dress", 
    liked: false, 
    tag: "Dresses", 
    pathImage: require('./../../assets/models/dress5.jpg') 
  },
  { 
    id: 40, 
    text: "Swiss Dot Cold Shoulder Ruffle Hem Belted Dress", 
    liked: false, 
    tag: "Dresses", 
    pathImage: require('./../../assets/models/dress6.jpg') 
  },
  { 
    id: 41, 
    text: "Plunging Neck Crisscross Backless Floral Maxi Dress", 
    liked: false, 
    tag: "Dresses", 
    pathImage: require('./../../assets/models/dress7.jpg') 
  },
  { 
    id: 42, 
    text: "Ribbed One-Shoulder Ruched Drawstring Dress", 
    liked: false, 
    tag: "Dresses", 
    pathImage: require('./../../assets/models/dress8.jpg') 
  },
  { 
    id: 43, 
    text: "Criss Cross Backless Floral Maxi Dress", 
    liked: false, 
    tag: "Dresses", 
    pathImage: require('./../../assets/models/dress9.jpg') 
  },
  { 
    id: 44, 
    text: "Backless Crisscross Cami Dress", 
    liked: false, 
    tag: "Dresses", 
    pathImage: require('./../../assets/models/dress10.jpg') 
  },

];

export default clothes;