import fs from "fs";
import path from "path";
import BrandsClient from "./BrandsClient";

export default function Brands() {
  const brandsDirectory = path.join(process.cwd(), "public/images/brands");
  
  // Read all files in the directory
  const filenames = fs.readdirSync(brandsDirectory);

  // Filter for image files and map to brand objects
  const brands = filenames
    .filter((filename) => /\.(png|jpe?g|svg|webp)$/i.test(filename))
    .map((filename) => ({
      name: filename.split('.')[0], // Use filename as brand name
      logo: `/images/brands/${filename}`,
      width: 240, // Default width
      height: 60, // Default height
    }));

  return <BrandsClient brands={brands} />;
}
