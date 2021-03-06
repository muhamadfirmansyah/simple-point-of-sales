import React from 'react';
import Header from './components/Header';

import styled, { ThemeProvider } from 'styled-components';
import * as theme from './styled/theme';

import ProductCard from './components/ProductCard';
import CartItem from './components/CartItem';

import { useSelector } from 'react-redux';
import ListMenu from './components/ListMenu';
import CalculateBox from './components/CalculateBox';

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 92vh;
`

const MenuContainer = styled.div`
  width: 15%;
  padding: 0.5rem 0;
  padding-right: 0.5rem;
`

const ProductContainer = styled.div`
  width: 60%;
  height: 100%;
  background: ${ props => props.theme.light };
  border-left: 1px solid #f7f7f7;
  border-right: 1px solid #f7f7f7;
  padding: 0.5rem 0.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1.8rem;
`

const CartContainer = styled.div`
  width: 25%;
  padding: 0.5rem 0.5rem;

`

const App = () => {

  const activeMenu = useSelector(state => state.product.menu);
  const products = useSelector(state => state.product.products.filter(item => item.category === activeMenu));
  const carts = useSelector(state => state.product.carts);

  return (
    <ThemeProvider theme={theme}>
      <Header/>
      <Container>

        <MenuContainer>
          <ListMenu />
        </MenuContainer>

        <ProductContainer>
          { products.map(product => 
            <ProductCard key={product.id} item={product} />
          ) }
        </ProductContainer>

        <CartContainer>
          
          <p>{ carts ? `${carts.length} item in cart` : `0 item in cart` }</p>
          { carts.map(item => 
            <CartItem item={item} key={item.id} />
          ) }

          <CalculateBox />
        </CartContainer>

      </Container>
    </ThemeProvider>
  )
}

export default App;