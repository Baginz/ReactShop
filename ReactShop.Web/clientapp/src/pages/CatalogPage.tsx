import React, { FC, useEffect, useState } from "react";
import "./catalog.css";
import { Typography, Menu, Layout } from "antd";

import CatalogSection from "../components/Catalog/CatalogSection";
import ShoppingCartSection from "../components/Catalog/ShoppingCartSection";
import { CartItem, Product } from "../types";
import { useTypedSelector } from "hooks/useTypedSelector";

const { Header, Sider } = Layout;
const { Text } = Typography;

const CatalogPage: FC = () => {
  const { products: productsFromStore } = useTypedSelector(
    (state) => state.products
  );
  const { categories } = useTypedSelector((state) => state.categories);
  const { currentUser } = useTypedSelector((state) => state.auth);
  const shoppingCart = currentUser ? currentUser.shoppingCart : null;

  const [filteredProducts, setFilteredProducts] = useState(productsFromStore);
  const [productsInCart, setProductsInCart] = useState([] as Product[]);

  const [item, setCartItem] = React.useState({
    shoppingCartId: currentUser ? currentUser.shoppingCart?.id : null,
    amount: 0,
    dateCreated: new Date(),
  } as CartItem);

  useEffect(() => {
    setFilteredProducts(productsFromStore);
  }, [productsFromStore]); // set the relation between redux campaign and local state

  const handleCategoryMenuClick = (e: any) => {
    const newProducts = productsFromStore.filter(
      (p) => p.categoryId.toString() === e.key
    );
    setFilteredProducts(newProducts);
  };

  const handleAddToCart = (product: Product) => {
    setProductsInCart((prevProducts) => [...prevProducts, product]);
  };

  const categoryMenu = categories.map((category) => (
    <Menu.Item key={category.id}>
      <Text>{category.name}</Text>
    </Menu.Item>
  ));

  return (
    <div>
      <div>
        <Layout className="site-layout">
          <Sider width={200}>
            <Menu
              mode="inline"
              onClick={handleCategoryMenuClick}
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              className="menu site-layout_menu"
            >
              {categoryMenu}
            </Menu>
          </Sider>
          <CatalogSection
            onAddToCart={handleAddToCart}
            filteredProducts={filteredProducts}
          ></CatalogSection>

          <ShoppingCartSection products={productsInCart}></ShoppingCartSection>
        </Layout>
      </div>
    </div>
  );
};

export default CatalogPage;
