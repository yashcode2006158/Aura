const fs = require('fs');
const path = require('path');

const components = [
  'Navbar', 'Hero', 'Avoters', 'Services', 'Types', 'Work', 'WhyUs', 'Reviews', 'FAQ', 'Pricing', 'Blog', 'Footer', 'Modal'
];

const dir = path.join(__dirname, 'client', 'src', 'components');

if (!fs.existsSync(dir)){
  fs.mkdirSync(dir, { recursive: true });
}

components.forEach(comp => {
  const content = `import React from 'react';

const ${comp} = () => {
  return (
    <section id="${comp.toLowerCase()}" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl mb-8">${comp} Component</h2>
      </div>
    </section>
  );
};

export default ${comp};
`;
  fs.writeFileSync(path.join(dir, `${comp}.jsx`), content);
});

console.log('Components created!');
