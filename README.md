# Quantum Computing Group Gallery

A responsive image gallery showcasing events and activities of the Quantum Computing Group at IIT Roorkee. This project features a modern UI with interactive elements and a sleek design.

## Features

- Responsive image gallery with Swiper.js implementation
- Hover effects with image zoom and information overlay
- Neon-styled "Read More" buttons
- Mobile-friendly design with adaptive breakpoints
- Smooth animations and transitions

## Technologies Used

- HTML5
- CSS3 (with modern flexbox and custom properties)
- JavaScript (Swiper.js library for carousel functionality)
- Google Fonts (Poppins)

## Project Structure

```
├── index.html          # Main HTML file
├── style.css           # Custom styles
├── script.js           # Swiper.js initialization
├── swiper-bundle.min.css  # Swiper carousel styles
├── swiper-bundle.min.js   # Swiper carousel library
└── images/             # Image assets folder
    ├── DnA.webp
    ├── idk.webp
    ├── qcc.jpg
    ├── shor.heic
    └── variational.jpg
```

## Gallery Details

The gallery primarily showcases the "Dead And Alive" event, which is part of the Qiskit Fall Fest conducted by the Quantum Computing Group at IIT Roorkee in collaboration with IBM Quantum Community.

## Setup

1. Clone the repository
2. Open `index.html` in a web browser
3. No build process required - works directly in the browser

## Customization

To add new images to the gallery:
1. Add your image files to the `images/` folder
2. Update the `index.html` file with new slide elements in the Swiper container
3. Adjust the styling in `style.css` if needed

## Responsive Design

The gallery adapts to different screen sizes:
- Mobile (0px+): 1 slide visible
- Small tablets (620px+): 2 slides visible
- Large tablets (868px+): 3 slides visible
- Desktops (1124px+): 4 slides visible

## Credits

- [Swiper.js](https://swiperjs.com/) - For the carousel functionality
- Quantum Computing Group, IIT Roorkee