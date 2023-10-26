import React from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import { Row, Col } from "reactstrap";
import { Button, BlockBetween,  BlockDes, BlockHead, BlockHeadContent, BlockTitle, Block, PreviewCard } from "../../../components/Component";

const FeesManagement = () => {

    return (
        <React.Fragment>
            <Head title="Fees Management"></Head>
            <Content>
                <BlockHead size="sm">
                    <BlockBetween>
                        <BlockHeadContent>
                            <BlockTitle page>Fees Management</BlockTitle>
                            <BlockDes className="text-soft">
                                <p>The finance manager adjusts the chargeback fee for card usage.</p>
                            </BlockDes>
                        </BlockHeadContent>
                    </BlockBetween>
                </BlockHead>
                <Block size="lg">
                    <PreviewCard>
                        <div className="card-head">
                            <h5 className="card-title">Adjusting Chargeback fee</h5>
                        </div>
                        <form>
                            <Row className="g-4">
                                <Col lg="6">
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="full-name-1">Chargeback Fees</label>
                                        <div className="form-control-wrap">
                                            <input type="text" id="full-name-1" className="form-control" />
                                        </div>
                                    </div>
                                </Col>
                                <Col lg="6">
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="email-address-1">Late Charge Fees</label>
                                        <div className="form-control-wrap">
                                            <input type="text" id="email-address-1" className="form-control" />
                                        </div>
                                    </div>
                                </Col>

                                <Col lg="6">
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="email-address-1">Annual Fees</label>
                                        <div className="form-control-wrap">
                                            <input type="text" id="email-address-1" className="form-control" />
                                        </div>
                                    </div>
                                </Col>

                                <Col lg="6">
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="email-address-1">Transaction Fees</label>
                                        <div className="form-control-wrap">
                                            <input type="text" id="email-address-1" className="form-control" />
                                        </div>
                                    </div>
                                </Col>

                                <Col lg="6">
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="email-address-1">Card Replacement Fees:</label>
                                        <div className="form-control-wrap">
                                            <input type="text" id="email-address-1" className="form-control" />
                                        </div>
                                    </div>
                                </Col>

                                <Col lg="6">
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="email-address-1">Interest Charges</label>
                                        <div className="form-control-wrap">
                                            <input type="text" id="email-address-1" className="form-control" />
                                        </div>
                                    </div>
                                </Col>

                                

                                <Col lg="6">
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="email-address-1">Credit Limit</label>
                                        <div className="form-control-wrap">
                                            <input type="text" id="email-address-1" className="form-control" />
                                        </div>
                                    </div>
                                </Col>
                                

                                

                                
                                
                                
                                
                                {/* <Col lg="6">
                                    <div className="form-group">
                                        <label className="form-label">Payment Methods</label>
                                        <ul className="custom-control-group g-3 align-center">
                                            <li>
                                                <div className="custom-control custom-control-sm custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="pay-card-1" />
                                                    <label className="custom-control-label" htmlFor="pay-card-1">
                                                        Card
                                                    </label>
                                                </div>
                                            </li>
                                            
                                        </ul>
                                    </div>
                                </Col> */}
                                <Col xl="12">
                                    <Button color="primary" size="lg">
                                        Save Information
                                    </Button>
                                </Col>
                            </Row>
                        </form>
                    </PreviewCard>
                </Block>
            </Content>
        </React.Fragment>

    )

}

export default FeesManagement;