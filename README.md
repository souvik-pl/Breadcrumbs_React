# Breadcrumbs Component

This project implements a reusable `Breadcrumbs` component in React that allows users to implement a list of links that help visualize a page's location within a site's hierarchical structure, allowing navigation up to any of the ancestors.

## Preview

![Preview](./preview/breadcrumbs-preview.gif)

## Usage

Here's how to use the `Breadcrumbs` and `Crumb` components in your project:

```tsx
import React, { useState } from "react";
import { Breadcrumbs, Crumb } from "./Breadcrumbs";

const App = () => {
  const [breadcrumbList, setBreadcrumbList] = useState([]);

  const openFolder = (id) => {
    // Define your folder opening logic here
  };

  return (
    <Breadcrumbs onSelect={openFolder}>
      {breadcrumbList.map((folder, index) => (
        <Crumb key={folder.id} label={folder.name} id={folder.id} index={index} />
      ))}
    </Breadcrumbs>
  );
};

export default App;
```

## Props

### `Crumb`

The Crumb component represents an individual breadcrumb item.

```typescript
export type CrumbProps = {
  id: string;
  label: string;
  index: number;
};
```

### `Breadcrumbs`

The Breadcrumbs component wraps around multiple `Crumb` components.

```typescript
export type BreadcrumbsProps = {
  children: JSX.Element[];
  onSelect: (crumbId: string) => void;
};
```

## Installation

- Pull this branch into your local system.
- Make sure you have Node installed (preferrably Node v20.11.1).
- Navigate to the project directory and run
  ```
  npm install
  ```
- Once all the dependencies have been installed, run the following command to start the dev server.
  ```
  npm run dev
  ```
