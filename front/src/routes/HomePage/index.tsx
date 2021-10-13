import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import { AccountTree } from '@mui/icons-material';
import Header from '../../components/common/Header';
import { ImageSection, OurSection, ShopSection } from './styles';
import backImg from '../../assets/images/back_img01.jpeg';
import Section from '../../components/common/Section';

import item1 from '../../assets/images/item1.jpeg';
import item2 from '../../assets/images/item2.jpeg';
import item3 from '../../assets/images/item3.jpeg';

const HomePage = () => {
  return (
    <>
      <Header />
      <ImageSection>
        <div className="content_box">
          <img src={backImg} alt="img" />
          <div className="text_box">
            <strong>What is Lorem Ipsum?</strong>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
        </div>
      </ImageSection>
      <Section>
        <OurSection>
          <div className="content_box">
            <Typography align="center" variant="h4" component="h2">
              OUR SERVICES
            </Typography>
            <Typography align="center" variant="subtitle1" component="p" className="title_text">
              WELCOME
            </Typography>
            <ul className="list_box">
              <li>
                <div className="icon_box">
                  <AccountTree />
                </div>
                <div className="text_box">
                  <p className="title">Why do we use it?</p>
                  <p className="txt ">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque cupiditate tenetur sequi dolor
                    recusandae unde quas.
                  </p>
                </div>
              </li>
              <li>
                <div className="icon_box">
                  <AccountTree />
                </div>
                <div className="text_box">
                  <p className="title">Why do we use it?</p>
                  <p className="txt ">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque cupiditate tenetur sequi dolor
                    recusandae unde quas.
                  </p>
                </div>
              </li>
              <li>
                <div className="icon_box">
                  <AccountTree />
                </div>
                <div className="text_box">
                  <p className="title">Why do we use it?</p>
                  <p className="txt ">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque cupiditate tenetur sequi dolor
                    recusandae unde quas.
                  </p>
                </div>
              </li>
              <li>
                <div className="icon_box">
                  <AccountTree />
                </div>
                <div className="text_box">
                  <p className="title">Why do we use it?</p>
                  <p className="txt ">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque cupiditate tenetur sequi dolor
                    recusandae unde quas.
                  </p>
                </div>
              </li>
              <li>
                <div className="icon_box">
                  <AccountTree />
                </div>
                <div className="text_box">
                  <p className="title">Why do we use it?</p>
                  <p className="txt ">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque cupiditate tenetur sequi dolor
                    recusandae unde quas.
                  </p>
                </div>
              </li>
              <li>
                <div className="icon_box">
                  <AccountTree />
                </div>
                <div className="text_box">
                  <p className="title">Why do we use it?</p>
                  <p className="txt ">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque cupiditate tenetur sequi dolor
                    recusandae unde quas.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </OurSection>
      </Section>
      <Section>
        <ShopSection>
          <Typography align="center" variant="h4" component="h2">
            OUR LATEST SHOP
          </Typography>
          <Typography align="center" variant="subtitle1" component="p" className="title_text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </Typography>

          <div className="item_list_box">
            <div className="link_box">
              <Link to="/">VIEW ALL SHOP</Link>
            </div>
            <ul className="list_box">
              <li>
                <Link to="/">
                  <img src={item1} alt="item" />
                </Link>
                <div className="price_box">
                  <h4>itme1</h4>
                  <span>15,000원</span>
                </div>
              </li>
              <li>
                <Link to="/">
                  <img src={item2} alt="item" />
                </Link>
                <div className="price_box">
                  <h4>itme2</h4>
                  <span>18,000원</span>
                </div>
              </li>
              <li>
                <Link to="/">
                  <img src={item3} alt="item" />
                </Link>
                <div className="price_box">
                  <h4>itme2</h4>
                  <span>18,000원</span>
                </div>
              </li>
              <li>
                <Link to="/">
                  <img src={item1} alt="item" />
                </Link>
                <div className="price_box">
                  <h4>itme1</h4>
                  <span>15,000원</span>
                </div>
              </li>
              <li>
                <Link to="/">
                  <img src={item2} alt="item" />
                </Link>
                <div className="price_box">
                  <h4>itme2</h4>
                  <span>18,000원</span>
                </div>
              </li>
              <li>
                <Link to="/">
                  <img src={item3} alt="item" />
                </Link>
                <div className="price_box">
                  <h4>itme2</h4>
                  <span>18,000원</span>
                </div>
              </li>
            </ul>
          </div>
        </ShopSection>
      </Section>
    </>
  );
};

export default HomePage;
