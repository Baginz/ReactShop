import { FC, useCallback } from "react";
import { Product } from "../../types";
import { useTypedSelector } from "hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import Layout, { Header } from "antd/lib/layout/layout";
type ShoppingCartProps = {
  products: Product[];
};

const ShoppingCartSection: FC<ShoppingCartProps> = (props) => {
  const dispatch = useDispatch();
  const { currentUser } = useTypedSelector((state) => state.auth);

  const productList = props.products.map((p) => <li>{p.name}</li>);

  return (
    <Layout className="site-layout">
      <Header className="header site-layout__header">Shopping cart</Header>
      <ul>{productList}</ul>
    </Layout>
  );
};

export default ShoppingCartSection;
