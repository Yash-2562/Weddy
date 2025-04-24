import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white mt-8 p-6 text-center border-t text-sm text-gray-600">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
        <p>© 2025 Weddy. All Rights Reserved.</p>
        <div className="flex gap-4">
          <a href="#">About</a>
          <a href="#">Contact us </a>
        </div>
      </div>
    </footer>
  );
}
