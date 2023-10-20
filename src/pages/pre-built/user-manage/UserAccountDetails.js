import React from "react";
import Head from "../../../layout/head/Head";
import { Card, Badge } from "reactstrap";
import {
  Block,
  BlockBetween,
  BlockDes,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  Icon,
  InputSwitch,
  Button
} from "../../../components/Component";

const UserAccountDetailsPage = ({ sm, updateSm }) => {
  return (
    <React.Fragment>
      <Head title="User List - Profile"></Head>

      <BlockHead size="lg">
        <BlockBetween>
          <BlockHeadContent>
            <BlockTitle tag="h4">Account Details</BlockTitle>
            <BlockDes>
              <p>Account Details like your Card Number and Available credit limit, that you use on LookCard.</p>
            </BlockDes>
          </BlockHeadContent>
          <BlockHeadContent className="align-self-start d-lg-none">
            <Button
              className={`toggle btn btn-icon btn-trigger mt-n1 ${sm ? "active" : ""}`}
              onClick={() => updateSm(!sm)}
            >
              <Icon name="menu-alt-r"></Icon>
            </Button>
          </BlockHeadContent>
        </BlockBetween>
      </BlockHead>

      <Block>
        <div className="border-0">
          <ul className="data-list">
            <li className="data-item">
              <div className="data-col">
                <div className="data-label">Name On Card</div>
                <div className="data-value">john Doe</div>
              </div>
            </li>
            <li className="data-item">
              <div className="data-col">
                <div className="data-label">Card Number</div>
                <div className="data-value">1234 1234 1234 1234</div>
              </div>
            </li>
            <li className="data-item">
              <div className="data-col">
                <div className="data-label">Available credit limit</div>
                <div className="data-value">$45,000</div>
              </div>
            </li>
            <li className="data-item">
              <div className="data-col">
                <div className="data-label">Total Credit Limit </div>
                <div className="data-value">$75,000</div>
              </div>
            </li>
            <li className="data-item">
              <div className="data-col">
                <div className="data-label">Payment Wallet Bal </div>
                <div className="data-value">$45,000</div>
              </div>
            </li>
            <li className="data-item">
              <div className="data-col">
                <div className="data-label">Deposit Wallet Bal </div>
                <div className="data-value">$45,000</div>
              </div>
            </li>
            
          </ul>
        </div>
      </Block>
    </React.Fragment>
  );
};
export default UserAccountDetailsPage;
