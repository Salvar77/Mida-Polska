const fs = require('fs');
const path = require('path');

const filesToProcess = [
  'src/components/Main/Recruitment.tsx',
  'src/components/Main/HowToStart.tsx',
  'src/components/Main/Footer.tsx',
  'src/components/Main/Flexibility.tsx',
  'src/components/Main/Fleet.tsx',
  'src/components/Main/EarningsChart.tsx',
  'src/components/Main/ContactMap.tsx',
  'src/components/Main/AdOnCar.tsx',
  'src/components/Main/Stats.tsx'
];

for (const relPath of filesToProcess) {
  const absolutePath = path.join('c:\\\\Users\\\\lukas\\\\Desktop\\\\mida-polska', relPath);
  if (!fs.existsSync(absolutePath)) {
    console.log(`Skipping ${absolutePath} - does not exist.`);
    continue;
  }

  let content = fs.readFileSync(absolutePath, 'utf8');

  // Add the import if not present
  if (!content.includes('import { fadeIn, textVariant }')) {
    content = content.replace(
      /(import .*framer-motion.*;?)/,
      "$1\nimport { fadeIn, textVariant } from '@/lib/animations';"
    );
  }

  // Remove the textVariant declaration block
  content = content.replace(/const textVariant = \([\s\S]*?\}\);/g, '');

  // Remove the fadeIn declaration block
  content = content.replace(/const fadeIn = \([\s\S]*?\}\);/g, '');

  // Remove the animation comment
  content = content.replace(/\/\/ --- Animacje wzorowane na 2K Detailing ---/g, '');
  content = content.replace(/\/\/ Warianty wejścia/g, '');

  // Remove 'import React from "react";'
  content = content.replace(/^import React from "react";\r?\n/gm, '');

  // Fix 'import React, { useState } from "react";' -> 'import { useState } from "react";'
  content = content.replace(/import React, \{\s*([\s\S]*?)\s*\} from "react";/g, 'import { $1 } from "react";');

  fs.writeFileSync(absolutePath, content);
  console.log(`Processed ${absolutePath}`);
}
console.log('Done processing files');
