import React, { useState, useEffect } from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import {
  Modal,
  ModalBody,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  Label,
  Input,
  DropdownItem,
  Badge,
} from "reactstrap";
import {
  Button,
  Block,
  BlockBetween,
  BlockDes,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  Icon,
  Col,
  Row,
  TooltipComponent,
  UserAvatar,
  DataTable,
  DataTableBody,
  DataTableHead,
  DataTableRow,
  DataTableItem,
  PaginationComponent,
  RSelect,
} from "../../../components/Component";
// import { filterStatus, filterDoc, bulkActionKycOptions } from "./KycData";
// import { findUpper } from "../../../utils/Utils";
import { Link } from "react-router-dom";
import { kycuserlist, applicationReject, applicationApproved, kycusersbulkupdate, exportexcel, exportpdf } from "../../../services/card";
import moment from "moment";

const KycListRegular = ({ history }) => {
  const [onSearch, setonSearch] = useState(true);
  const [onSearchText, setSearchText] = useState("");
  const [tablesm, updateTableSm] = useState(false);
  const [data, setData] = useState([]);
  const [viewModal, setViewModal] = useState(false);
  const [reMarkModal, setreMarkModal] = useState(false);
  const [detail, setDetail] = useState({});
  const [actionText, setActionText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(10);
  const [sort, setSortState] = useState("");
  const [docType, setdocType] = useState("all");
  const [kycstatus, setkycstatus] = useState("");
  const [remark, setRemark] = useState('Enter KYC Rejection details');
  const [selectedDocType, setSelectedDocType] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);


  // Sorting data
  const sortFunc = (params) => {
    let defaultData = data;
    if (params === "asc") {
      let sortedData = defaultData.sort((a, b) => a.name_on_card.localeCompare(b.name_on_card));
      setData([...sortedData]);
    } else if (params === "dsc") {
      let sortedData = defaultData.sort((a, b) => b.name_on_card.localeCompare(a.name_on_card));
      setData([...sortedData]);
    }
  };

  // Changing state value when searching name
  useEffect(() => {
    loadkyclist()
  }, []);

  const loadkyclist = async () => {
    console.log("enter raja count");
    const req = { docType: docType, status: kycstatus, page: currentPage, limit: itemPerPage, order: sort };
    try {
      const response = await kycuserlist(req);
      if (response && response.data && response.data.data) {
        await setData(response?.data?.data);
      } else {
        console.log("enter Raja");
      }
    } catch (error) {
      await setData([]);
    }
  }

  const exportcards = async (e) => {
    const req = { ids: selectedItems };
    console.log("cardlistaspdf", req);
    try {
      if (e.value === 'pdf') {
        const response = await exportpdf(req);
        if (response && response.data) {
          console.log("dataaa", response.data);
          const recData = response.data;
          const filename = 'users-account.pdf'
          exportData(recData, filename);
          //  await setData(response.data.data);
        }
      } else if (e.value === 'excel') { // I assume this is what you intended
        const response = await exportexcel(req);
        if (response && response.data && response.data) {
          const recData = response.data;
          const filename = 'users-account.xlsx'
          exportData(recData, filename);
          // await setData(response.data.data);
        }
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }

  const onActionClick = async () => {
    const req = { ids: selectedItems, status: actionText, status_given_by: 1 };
    console.log("req----------->", req);
    try {
      const response = await kycusersbulkupdate(req);
      if (response && response.data && response.data.data) {
        loadkyclist()
      }
    } catch (error) {
      await setData([]);
    }
  }

  const exportData = (data, filename) => {
    const url = window.URL.createObjectURL(new Blob([data]))
    const link = document.createElement('a');
    link.href = url
    link.setAttribute('download', filename)
    document.body.appendChild(link)
    link.click()
  }


  // onChange function for searching name
  const onFilterChange = (e) => {
    console.log("onSearchTextasasssa", e);
    setSearchText(e.target.value);
    if (onSearchText !== "") {
      console.log("enter if", onSearchText);
      const filteredObject = data.filter((item) => {
        return item.name_on_card.toLowerCase().includes(onSearchText.toLowerCase());
      });
      setData([...filteredObject]);
    } else {
      console.log("enter else");
      setData([...data]);
    }
  };

  // function to declare the state change
  const onActionText = (e) => {
    setActionText(e.value);
  };

  // function to select all the items of the table
  const selectorCheck = (e) => {
    let newData;
    newData = data.map((item) => {
      item.check = e.currentTarget.checked;
      return item;
    });
    setData([...newData]);
  };

  // function to change the property of an item of the table
  // const onSelectChange = (e, id) => {
  //   console.log("id ", id);
  //   let newData = data;
  //   let index = newData.findIndex((item) => item.id === id);
  //   newData[index].check = e.currentTarget.checked;
  //   setSelectedValue([...index]);
  // };

  const onSelectChange = (e, id) => {
    console.log("id ", id);
    const isChecked = e.target.checked;
    let newData = data;
    let index = newData.findIndex((item) => item.id === id);
    newData[index].check = e.currentTarget.checked;
    if (isChecked) {
      setSelectedItems([...selectedItems, id]);
    } else {
      setSelectedItems(selectedItems.filter((selectedItem) => selectedItem !== id));
    }
  };



  // function to fire actions after dropdowm select
  // const onActionClick = () => {
  //   console.log("setSelectedValue", selectedItems);
  //   // if (actionText === "Reject") {
  //   //   let newData = data.map((item) => {
  //   //     if (item.check === true) item.status = "Rejected";
  //   //     return item;
  //   //   });
  //   //   setData([...newData]);
  //   // } else if (actionText === "Delete") {
  //   //   let newData;
  //   //   newData = data.filter((item) => item.check !== true);
  //   //   setData([...newData]);
  //   // }
  // };

  // function to load detail data
  const loadDetail = (id) => {
    let index = data.findIndex((item) => item.id === id);
    setDetail(data[index]);
  };

  const handleButtonClick = () => {
    setSearchText('');
    toggle();
  };

  const handleRemarkChange = (event) => {
    setRemark(event.target.value);
  };

  const onRejectFunction = async (id, remark) => {
    const req = { card_id: id, user_id: 1, status: "rejected", remark: remark }
    try {
      const response = await applicationReject(req);
      if (response && response.data) {
        loadkyclist()
        setreMarkModal(false);
      }
    } catch (error) {
      console.error("Error loading transaction history:", error);
    }
  }

  const onSuspendUser = async (id) => {
    const req = { card_id: id, user_id: 1, status: "suspended" }
    try {
      const response = await applicationReject(req);
      if (response && response.data) {
        loadkyclist()
      }
    } catch (error) {
      console.error("Error loading transaction history:", error);
    }
  }

  const approveApplication = async (id) => {
    const req = { card_id: id, status_given_by: 1 }
    try {
      const response = await applicationApproved(req);
      if (response && response.data) {
        loadkyclist()
        setreMarkModal(false);
      }
    } catch (error) {
      console.error("Error loading transaction history:", error);
    }
  }

  const handleFilter = async () => {
    try {
      const response = await kycuserlist();
      if (response && response.data && response.data.data) {
        const filterData = response.data.data;
        if (selectedDocType && !selectedStatus) {
          const filteredObject = filterData.filter((item) => {
            return item.kyc?.document_type.toLowerCase().includes(selectedDocType);
          });
          setData([...filteredObject]);
        } else if (!selectedDocType && selectedStatus) {
          const filteredObject = filterData.filter((item) => {
            return item?.status.toLowerCase().includes(selectedStatus);
          });
          setData([...filteredObject]);
        } else if (selectedDocType && selectedStatus) {
          const filteredObject = filterData.filter((item) => {
            return item?.status.toLowerCase().includes(selectedStatus);
          });
          const filteredObjectType = await filteredObject.filter((item) => {
            return item.kyc?.document_type.toLowerCase().includes(selectedDocType);
          });
          setData([...filteredObjectType]);
        }
      }
    } catch (error) {
      await setData([]);
    }
  };

  const resetFilter = () => {
    setSelectedDocType('');
    setSelectedStatus('');
    loadkyclist()
  }

  const filterStatus = [
    { value: "approved", label: "Approved" },
    { value: "pending", label: "Pending" },
    { value: "deleted", label: "Deleted" },
    { value: "rejected", label: "Rejected" },
  ];

  const filterDoc = [
    { value: "nid", label: "Nidcard" },
    { value: "passport", label: "Passport" },
    { value: "driving", label: "Driving" },
  ];

  const bulkActionKycOptions = [
    { value: "suspended", label: "Suspend" },
    { value: "rejected", label: "Reject" },
  ];

  const exportActionKycOptions = [
    { value: "pdf", label: "PDF" },
    { value: "excel", label: "Excel" },
  ];

  // function to toggle the search option
  const toggle = () => setonSearch(!onSearch);

  // Get current list, pagination
  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (

    <React.Fragment>
      <Head title="KYC Lists - Regular"></Head>
      <Content>
        <BlockHead size="sm">
          <BlockBetween>
            <BlockHeadContent>
              <BlockTitle page>User Accounts</BlockTitle>
              <BlockDes className="text-soft">
                <p>You have total {data.length} user accounts.</p>
              </BlockDes>
            </BlockHeadContent>
            <BlockHeadContent>
              <Button color="light" outline className="bg-white d-none d-sm-inline-flex">
                <Icon name="download-cloud"></Icon>
                {/* <span>Export</span> */}
                <RSelect
                  options={exportActionKycOptions}
                  className="w-100px"
                  placeholder="Export"
                  onChange={(e) => exportcards(e)}
                />
              </Button>
              <Button color="light" outline className="btn-icon bg-white d-inline-flex d-sm-none">
                <Icon name="download-cloud"></Icon>
              </Button>
            </BlockHeadContent>
          </BlockBetween>
        </BlockHead>
        <Block>
          <DataTable className="card-stretch">
            <div className="card-inner position-relative card-tools-toggle">
              <div className="card-title-group">
                <div className="card-tools">
                  <div className="form-inline flex-nowrap gx-3">
                    <div className="form-wrap">
                      <RSelect
                        options={bulkActionKycOptions}
                        className="w-130px"
                        placeholder="Bulk Action"
                        onChange={(e) => onActionText(e)}
                      />
                    </div>
                    <div className="btn-wrap">
                      <span className="d-none d-md-block">
                        <Button
                          color="light"
                          outline
                          disabled={actionText === "" ? true : false}
                          className="btn-dim"
                          onClick={() => onActionClick()}
                        >
                          Apply
                        </Button>
                      </span>
                      <span className="d-md-none">
                        <Button
                          color="light"
                          outline
                          disabled={actionText === "" ? true : false}
                          className="btn-dim btn-icon"
                          onClick={() => onActionClick()}
                        >
                          <Icon name="arrow-right"></Icon>
                        </Button>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="card-tools me-n1">
                  <ul className="btn-toolbar gx-1">
                    <li>
                      <Button
                        onClick={(ev) => {
                          ev.preventDefault();
                          toggle();
                        }}
                        className="btn-icon search-toggle toggle-search"
                      >
                        <Icon name="search"></Icon>
                      </Button>
                    </li>
                    <li className="btn-toolbar-sep"></li>
                    <li>
                      <div className="toggle-wrap">
                        <Button
                          className={`btn-icon btn-trigger toggle ${tablesm ? "active" : ""}`}
                          onClick={() => updateTableSm(true)}
                        >
                          <Icon name="menu-right"></Icon>
                        </Button>
                        <div className={`toggle-content ${tablesm ? "content-active" : ""}`}>
                          <ul className="btn-toolbar gx-1">
                            <li className="toggle-close">
                              <Button className="btn-icon btn-trigger toggle" onClick={() => updateTableSm(false)}>
                                <Icon name="arrow-left"></Icon>
                              </Button>
                            </li>
                            <li>
                              <UncontrolledDropdown>
                                <DropdownToggle tag="a" className="btn btn-trigger btn-icon dropdown-toggle">
                                  <div className="dot dot-primary"></div>
                                  <Icon name="filter-alt"></Icon>
                                </DropdownToggle>
                                <DropdownMenu
                                  end
                                  className="filter-wg dropdown-menu-xl"
                                  style={{ overflow: "visible" }}
                                >
                                  <div className="dropdown-head">
                                    <span className="sub-title dropdown-title">Advanced Filter</span>
                                  </div>
                                  <div className="dropdown-body dropdown-body-rg">
                                    <Row className="gx-6 gy-3">
                                      <Col size="6">
                                        <div className="form-group">
                                          <label className="overline-title overline-title-alt">Doc Type</label>
                                          <RSelect
                                            options={filterDoc}
                                            placeholder="Any Type"
                                            value={selectedDocType}
                                            onChange={(selectedOption) => setSelectedDocType(selectedOption.value)}
                                          />
                                          {/* <RSelect options={filterDoc} placeholder="Any Type" /> */}
                                        </div>
                                      </Col>
                                      <Col size="6">
                                        <div className="form-group">
                                          <label className="overline-title overline-title-alt">Status</label>
                                          <RSelect
                                            options={filterStatus}
                                            placeholder="Any Status"
                                            value={selectedStatus}
                                            onChange={(selectedOption) => setSelectedStatus(selectedOption.value)}
                                          />
                                          {/* <RSelect options={filterStatus} placeholder="Any Status" /> */}
                                        </div>
                                      </Col>
                                      <Col size="12">
                                        <div className="form-group">
                                          <Button type="button" color="secondary" onClick={handleFilter}>
                                            Filter
                                          </Button>
                                        </div>
                                      </Col>
                                    </Row>
                                  </div>
                                  <div className="dropdown-foot between">
                                    <a
                                      className="clickable"
                                      href="#reset"
                                      onClick={() => {
                                        resetFilter();
                                      }}
                                    >
                                      Reset Filter
                                    </a>
                                    {/* <a
                                      href="#save"
                                      onClick={(ev) => {
                                        ev.preventDefault();
                                      }}
                                    >
                                      Save Filter
                                    </a> */}
                                  </div>
                                </DropdownMenu>
                              </UncontrolledDropdown>
                            </li>
                            <li>
                              <UncontrolledDropdown>
                                <DropdownToggle tag="a" className="btn btn-trigger btn-icon dropdown-toggle">
                                  <Icon name="setting"></Icon>
                                </DropdownToggle>
                                <DropdownMenu end className="dropdown-menu-xs">
                                  <ul className="link-check">
                                    <li>
                                      <span>Show</span>
                                    </li>
                                    <li className={itemPerPage === 10 ? "active" : ""}>
                                      <DropdownItem
                                        tag="a"
                                        href="#dropdownitem"
                                        onClick={(ev) => {
                                          ev.preventDefault();
                                          setItemPerPage(10);
                                        }}
                                      >
                                        10
                                      </DropdownItem>
                                    </li>
                                    <li className={itemPerPage === 15 ? "active" : ""}>
                                      <DropdownItem
                                        tag="a"
                                        href="#dropdownitem"
                                        onClick={(ev) => {
                                          ev.preventDefault();
                                          setItemPerPage(15);
                                        }}
                                      >
                                        15
                                      </DropdownItem>
                                    </li>
                                  </ul>
                                  <ul className="link-check">
                                    <li>
                                      <span>Order</span>
                                    </li>
                                    <li className={sort === "dsc" ? "active" : ""}>
                                      <DropdownItem
                                        tag="a"
                                        href="#dropdownitem"
                                        onClick={(ev) => {
                                          ev.preventDefault();
                                          setSortState("dsc");
                                          sortFunc("dsc");
                                        }}
                                      >
                                        DESC
                                      </DropdownItem>
                                    </li>
                                    <li className={sort === "asc" ? "active" : ""}>
                                      <DropdownItem
                                        tag="a"
                                        href="#dropdownitem"
                                        onClick={(ev) => {
                                          ev.preventDefault();
                                          setSortState("asc");
                                          sortFunc("asc");
                                        }}
                                      >
                                        ASC
                                      </DropdownItem>
                                    </li>
                                  </ul>
                                </DropdownMenu>
                              </UncontrolledDropdown>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={`card-search search-wrap ${!onSearch && "active"}`}>
                <div className="card-body">
                  <div className="search-content">
                    <Button
                      onClick={handleButtonClick}
                      className="search-back btn-icon toggle-search"
                    >
                      <Icon name="arrow-left"></Icon>
                    </Button>
                    <input
                      type="text"
                      className="border-transparent form-focus-none form-control"
                      placeholder="Search by user or email"
                      value={onSearchText}
                      onChange={(e) => onFilterChange(e)}
                    />
                    <Button className="search-submit btn-icon">
                      <Icon name="search"></Icon>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <DataTableBody>
              <DataTableHead>
                <DataTableRow className="nk-tb-col-check">
                  <div className="custom-control custom-control-sm custom-checkbox notext">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="uid_1"
                      onChange={(e) => selectorCheck(e)}
                    />
                    <label className="custom-control-label" htmlFor="uid_1"></label>
                  </div>
                </DataTableRow>
                <DataTableRow>
                  <span>User</span>
                </DataTableRow>
                <DataTableRow size="mb">
                  <span>Doc Type</span>
                </DataTableRow>
                <DataTableRow size="md">
                  <span>Documents</span>
                </DataTableRow>
                <DataTableRow size="lg">
                  <span>Submitted</span>
                </DataTableRow>
                <DataTableRow size="md">
                  <span>Status</span>
                </DataTableRow>
                <DataTableRow size="lg">
                  <span>Checked by</span>
                </DataTableRow>
                <DataTableRow className="nk-tb-col-tools">&nbsp;</DataTableRow>
              </DataTableHead>
              {currentItems.length > 0
                ? currentItems.map((item) => (

                  // <div key={item.id}>{item.name_on_card}</div>
                  <>
                    <DataTableItem key={item.id}>
                      <DataTableRow className="nk-tb-col-check">
                        <div className="custom-control custom-control-sm custom-checkbox notext">
                          <input type="checkbox" className="custom-control-input" defaultChecked={item.check} id={item.id + "uid1"}
                            key={Math.random()} onChange={(e) => onSelectChange(e, item.id)} />
                          <label className="custom-control-label" htmlFor={item.id + "uid1"}></label>
                        </div>
                      </DataTableRow>
                      <DataTableRow>
                        <Link to={`${process.env.PUBLIC_URL}/kyc-details-regular/${item.id}`}>
                          <div className="user-card">
                            {/* <UserAvatar theme={item.avatarBg} text={item.name_on_card}></UserAvatar> */}
                            <div className="user-info">
                              <span className="tb-lead">
                                {item.name_on_card}{" "}
                                <span className={`dot dot-${item.status === "Approved" ? "success" : item.status === "pending_approval" ? "info"
                                  : "danger"} d-md-none ms-1`}></span>
                              </span>
                              <span>{item.id}</span>
                            </div>
                          </div>
                        </Link>
                      </DataTableRow>
                      <DataTableRow size="mb">
                        <span className="tb-lead-sub">{item?.kyc?.document_type}</span>
                      </DataTableRow>
                      <DataTableRow size="md">
                        <ul className="list-inline list-download">
                          {item?.kyc?.document_front_view ? (
                            <li>
                              Soft Copy - View{" "}
                              <a href="#download" onClick={(ev) => {
                                ev.preventDefault();
                              }}
                                className="popup">
                                <Icon name="download"></Icon>
                              </a>
                            </li>
                          ) : (
                            <li> -</li>
                          )}
                        </ul>
                      </DataTableRow>
                      <DataTableRow size="lg">
                        <span className="tb-date">{moment(item?.time_of_application).format('DD MMM, YYYY h:mm a')}</span>
                      </DataTableRow>
                      <DataTableRow size="md">
                        <span className={`tb-status text-${item?.status === "approved" ? "success" : item?.status === "pending_approval" ? "info"
                          : "danger"}`}>
                          {item?.status === "pending_approval" ? "Pending" : item?.status === "rejected" ? "Rejected" : item?.status === "approved" ? "Approved" : item?.status === "suspended" ? "Suspended" : item?.status === "active" ? "Active" : item?.status}
                        </span>
                        {/* {item?.status !== "pending_approval" && (
                          <TooltipComponent icon="info" direction="top" id={item?.id + "pendingless" } text={`${item?.status} at Dec 18, 2019
                            01:02 am`}></TooltipComponent>
                          )}
                          {!item?.status === "pending_approval" && (
                          <span>
                            <TooltipComponent icon="info" direction="top" text={item?.time_of_application} id={item?.id} />
                          </span>
                          )} */}
                      </DataTableRow>
                      <DataTableRow size="lg">
                        <div className="user-card">
                          {/* <UserAvatar theme="orange-dim" size="xs" text={item?.customer_type}></UserAvatar> */}
                          <div className="user-name">
                            <span className="tb-lead">{item?.status_given_by_user ? item?.status_given_by_user.first_name : '-'} </span>
                          </div>
                        </div>
                      </DataTableRow>
                      <DataTableRow className="nk-tb-col-tools">
                        <ul className="nk-tb-actions gx-1">
                          <li className="nk-tb-action-hidden" onClick={() => {
                            loadDetail(item.id);
                            setViewModal(true);
                          }}>
                            <TooltipComponent tag="a" containerClassName="btn btn-trigger btn-icon" id={"view" + item.id} icon="eye-fill"
                              direction="top" text="Quick View" />
                          </li>
                          {item.status === "rejected" ? null : item.status === "approved" ? (
                            <li className="nk-tb-action-hidden">
                              <TooltipComponent tag="a" containerClassName="btn btn-trigger btn-icon" id={"reject" + item.id}
                                icon="cross-fill-c" direction="top" text="Reject" />

                            </li>
                          ) : (
                            <React.Fragment>
                              <li className="nk-tb-action-hidden" onClick={() => {
                                approveApplication(item.id);
                              }}>
                                <TooltipComponent tag="a" containerClassName="btn btn-trigger btn-icon" id={"approve" + item.id}
                                  icon="check-fill-c" direction="top" text="Approve" />
                              </li>
                              <li className="nk-tb-action-hidden" onClick={() => {
                                loadDetail(item.id);
                                setreMarkModal(true);
                              }}>
                                <TooltipComponent tag="a" containerClassName="btn btn-trigger btn-icon" id={"reject" + item.id}
                                  icon="cross-fill-c" direction="top" text="Reject" />
                              </li>
                            </React.Fragment>
                          )}
                          <li>
                            <UncontrolledDropdown>
                              <DropdownToggle tag="a" className="dropdown-toggle btn btn-icon btn-trigger">
                                <Icon name="more-h"></Icon>
                              </DropdownToggle>
                              <DropdownMenu end>
                                <ul className="link-list-opt no-bdr">
                                  <li>
                                    <DropdownItem tag="a" href="#view"
                                      onClick={(ev) => {
                                        ev.preventDefault();
                                        loadDetail(item.id);
                                        setViewModal(true);
                                      }}
                                    >
                                      <Icon name="eye"></Icon>
                                      <span>Quick View</span>
                                    </DropdownItem>
                                  </li>
                                  <li>
                                    <DropdownItem tag="a" href="#details" onClick={(ev) => {
                                      ev.preventDefault();
                                      history.push(`${process.env.PUBLIC_URL}/kyc-details-regular/${item.id}`);
                                    }}
                                    >
                                      <Icon name="focus"></Icon>
                                      <span>View Details</span>
                                    </DropdownItem>
                                  </li>
                                  {item.status === "rejected" ? null : item.status === "approved" ? (
                                    <li onClick={() => { loadDetail(item.id); setreMarkModal(true); }}>
                                      <DropdownItem tag="a" href="#reject" onClick={(ev) => {
                                        ev.preventDefault();
                                      }}
                                      >
                                        <Icon name="na"></Icon>
                                        <span>Reject User</span>
                                      </DropdownItem>
                                    </li>
                                  ) : (
                                    <React.Fragment>
                                      <li onClick={() => { approveApplication(item.id); }}>
                                        <DropdownItem tag="a" href="#approve" onClick={(ev) => {
                                          ev.preventDefault();
                                        }}
                                        >
                                          <Icon name="check-thick"></Icon>
                                          <span>Approve</span>
                                        </DropdownItem>
                                      </li>
                                      <li onClick={() => { onSuspendUser(item.id); }}>
                                        <DropdownItem tag="a" href="#suspend" onClick={(ev) => {
                                          ev.preventDefault();
                                        }}
                                        >
                                          <Icon name="na"></Icon>
                                          <span>Suspend User</span>
                                        </DropdownItem>
                                      </li>
                                    </React.Fragment>
                                  )}


                                </ul>
                              </DropdownMenu>
                            </UncontrolledDropdown>
                          </li>
                        </ul>
                      </DataTableRow>
                    </DataTableItem>
                  </>
                ))
                : null}
            </DataTableBody>
            <div className="card-inner">
              {currentItems.length > 0 ? (
                <PaginationComponent
                  noDown
                  itemPerPage={itemPerPage}
                  totalItems={data.length}
                  paginate={paginate}
                  currentPage={currentPage}
                />
              ) : (
                <div className="text-center">
                  <span className="text-silent">No data found</span>
                </div>
              )}
            </div>
          </DataTable>
        </Block>
      </Content>
      <Modal isOpen={viewModal} toggle={() => setViewModal(false)} className="modal-dialog-centered" size="lg">
        <ModalBody>
          <a
            href="#cancel"
            onClick={(ev) => {
              ev.preventDefault();
              setViewModal(false);
            }}
            className="close"
          >
            <Icon name="cross-sm"></Icon>
          </a>
          <div className="nk-modal-head">
            <h4 className="nk-modal-title title">
              KYC Details <small className="text-primary"> {detail.id}</small>
            </h4>
          </div>
          <div className="nk-tnx-details mt-sm-3">
            <Row className="gy-3">
              <Col lg={6}>
                <span className="sub-text"> ID</span>
                <span className="caption-text">{detail?.kyc?.id}</span>
              </Col>
              <Col lg={6}>
                <span className="sub-text">Applicant Name </span>
                <span className="caption-text text-break">{detail?.kyc?.first_name}</span>
              </Col>
              <Col lg={6}>
                <span className="sub-text">Document Type </span>
                <span className="caption-text">{detail?.kyc?.document_type}</span>
              </Col>
              <Col lg={6}>
                <span className="sub-text">Status</span>
                <Badge
                  color={detail.status === "approved" ? "success" : detail.status === "pending_approval" ? "info" : "danger"}
                  size="md"
                >
                  {detail?.status === "pending_approval" ? "Pending" : detail?.status}
                </Badge>
              </Col>
              <Col lg={6}>
                <span className="sub-text">Date</span>
                <span className="caption-text"> {moment(detail?.time_of_application).format('DD MMM, YYYY h:mm a')}</span>
              </Col>
              <Col lg={6}>
                <span className="sub-text">Checked By</span>
                <span className="caption-text">{detail?.status_given_by_user ? detail?.status_given_by_user.first_name : '-'}</span>
              </Col>
            </Row>
          </div>
        </ModalBody>
      </Modal>
      <Modal isOpen={reMarkModal} toggle={() => setreMarkModal(false)} className="modal-dialog-centered" size="lg">
        <ModalBody>
          <a
            href="#cancel"
            onClick={(ev) => {
              ev.preventDefault();
              setreMarkModal(false);
            }}
            className="close"
          >
            <Icon name="cross-sm"></Icon>
          </a>
          <div className="nk-modal-head">
            <h4 className="nk-modal-title title mb-4">
              KYC Rejection Remark <small className="text-primary"> {detail.id}</small>
            </h4>
          </div>
          <div className="nk-tnx-details mt-sm-3">
            <Row className="gy-2">
              <Col lg={12}>
                <div className="form-group mb-2">
                  <Label htmlFor="default-textarea" className="form-label">
                    Remark
                  </Label>
                  <div className="form-control-wrap">
                    <Input
                      className="no-resize"
                      id="default-textarea"
                      value={remark}
                      onChange={handleRemarkChange}
                      type="textarea"
                    />
                  </div>
                </div>
              </Col>

              <Col lg={6}>
                <div className="mb-2">
                  <Button color="primary" onClick={() => {
                    onRejectFunction(detail.id, remark);
                  }} >Submit</Button>
                </div>
              </Col>
            </Row>
          </div>
        </ModalBody>
      </Modal>
    </React.Fragment>

  );
};
export default KycListRegular;
