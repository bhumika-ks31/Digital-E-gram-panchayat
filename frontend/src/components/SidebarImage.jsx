import React from "react";

export default function SidebarImage() {
  return (
    <div className="hidden md:block w-1/3">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Indian_village_scene.jpg/800px-Indian_village_scene.jpg"
        alt="Village Scene"
        className="w-full h-full object-cover rounded-lg shadow-md"
      />
    </div>
  );
}
