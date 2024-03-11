import React, { useState, useRef, useEffect } from "react";

import backIcon from "../../src/images/back.png";
import Dropdown from "../../src/images/dropdown.png";
import Bitcoin from "../../src/images/bitcoin.png";
import ArrowDown from "../../src/images/arrow-down.png";
import BuyBtc from "../../src/images/buy-btc.png";
import SellBtc from "../../src/images/sell-btc.png";

import { AreaChart, Area } from "recharts";

function Home() {
  // Three dot dropdown
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Info toggle
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  // Tab
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const dataDay = [
    { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
    { name: "Page B", uv: 3100, pv: 1398, amt: 2210 },
    { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
    { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
    { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
    { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
    { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
  ];
  const dataWeek = [
    { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
    { name: "Page B", uv: 2000, pv: 1398, amt: 2210 },
    { name: "Page C", uv: 3000, pv: 9800, amt: 2290 },
    { name: "Page D", uv: 1780, pv: 3908, amt: 2000 },
    { name: "Page E", uv: 2890, pv: 4800, amt: 2181 },
    { name: "Page F", uv: 3390, pv: 3800, amt: 2500 },
    { name: "Page G", uv: 2490, pv: 4300, amt: 2100 },
  ];
  const dataMonth = [
    { name: "Page A", uv: 2000, pv: 2400, amt: 2400 },
    { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
    { name: "Page C", uv: 3500, pv: 9800, amt: 2290 },
    { name: "Page D", uv: 1780, pv: 3908, amt: 2000 },
    { name: "Page E", uv: 3890, pv: 4800, amt: 2181 },
    { name: "Page F", uv: 1390, pv: 3800, amt: 2500 },
    { name: "Page G", uv: 1490, pv: 4300, amt: 2100 },
  ];
  const dataYear = [
    { name: "Page A", uv: 1000, pv: 2400, amt: 2400 },
    { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
    { name: "Page C", uv: 3500, pv: 9800, amt: 2290 },
    { name: "Page D", uv: 3780, pv: 3908, amt: 2000 },
    { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
    { name: "Page F", uv: 1390, pv: 3800, amt: 2500 },
    { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
  ];

  return (
    <div className="Home">
      <div className="header">
        <div className="left">
          <button>
            <img src={backIcon} alt="Back" />
          </button>
        </div>
        <div className="middle">
          <p>Bitcoin Wallet</p>
        </div>
        <div className="right">
          <div className="dropdown" ref={dropdownRef}>
            <button onClick={toggleDropdown} className="dropdown-toggle">
              <img src={Dropdown} alt="Dropdown" />
            </button>
            <div className={`dropdown-menu ${isOpen ? "open" : ""}`}>
              <ul>
                <li>
                  Edit
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z" />
                    </svg>
                  </span>
                </li>
                <li>
                  Courier info
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M121 32C91.6 32 66 52 58.9 80.5L1.9 308.4C.6 313.5 0 318.7 0 323.9V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V323.9c0-5.2-.6-10.4-1.9-15.5l-57-227.9C446 52 420.4 32 391 32H121zm0 64H391l48 192H387.8c-12.1 0-23.2 6.8-28.6 17.7l-14.3 28.6c-5.4 10.8-16.5 17.7-28.6 17.7H195.8c-12.1 0-23.2-6.8-28.6-17.7l-14.3-28.6c-5.4-10.8-16.5-17.7-28.6-17.7H73L121 96z" />
                    </svg>
                  </span>
                </li>
                <li>
                  Share
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M288 109.3V352c0 17.7-14.3 32-32 32s-32-14.3-32-32V109.3l-73.4 73.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l128-128c12.5-12.5 32.8-12.5 45.3 0l128 128c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L288 109.3zM64 352H192c0 35.3 28.7 64 64 64s64-28.7 64-64H448c35.3 0 64 28.7 64 64v32c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V416c0-35.3 28.7-64 64-64zM432 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
                    </svg>
                  </span>
                </li>
                <li className="remove">
                  Remove
                  <span>
                    <svg
                      svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                    >
                      <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                    </svg>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="btc-top-info">
        <div className="top-wrap">
          <div className="left">
            <span>
              <img src={Bitcoin} alt="Dropdown" />
            </span>
            <h6>Bitcoin</h6>
          </div>
          <div className="right">
            <h6>BTC</h6>
          </div>
        </div>
        <h2 className="btc-count">
          <span>3.529020</span> BTC
        </h2>
        <div className="usd-discount">
          <h4 className="usd-count">$19.153 USD</h4>
          <p className="discount">- 2.32%</p>
        </div>
        <p className="hidden-info-toggle-wrap">
          <span
            className={`hidden-info-toggle ${isActive ? "active" : ""}`}
            onClick={handleClick}
          >
            <img src={ArrowDown} alt="Toggle" />
          </span>
        </p>
        <div className={`hidden-info ${isActive ? "active" : ""}`}>
          <div className="buy-sell-buttons">
            <a href="/buy">
              <button>Buy</button>
            </a>
            <a href="/sell">
              <button>Sell</button>
            </a>
          </div>
        </div>
      </div>

      <div className="tab-container">
        <div className="tab-buttons">
          <button
            className={activeTab === 1 ? "active" : ""}
            onClick={() => handleTabClick(1)}
          >
            Day
          </button>
          <button
            className={activeTab === 2 ? "active" : ""}
            onClick={() => handleTabClick(2)}
          >
            Week
          </button>
          <button
            className={activeTab === 3 ? "active" : ""}
            onClick={() => handleTabClick(3)}
          >
            Month
          </button>
          <button
            className={activeTab === 4 ? "active" : ""}
            onClick={() => handleTabClick(4)}
          >
            Year
          </button>
        </div>
        <div className="tab-content">
          <div className={`tab-item ${activeTab === 1 ? "active" : ""}`}>
            <div className="chart-content">
                <div className="lower-higher">
                    <div className="lower">
                        <span className="dot"></span>
                        <span className="text">Lower: </span>
                        <span className="text">$4.895</span>
                    </div>
                    <div className="higher">
                        <span className="dot"></span>
                        <span className="text">Higher: </span>
                        <span className="text">$6.857</span>
                    </div>
                </div>
                <AreaChart width={360} height={120} data={dataDay} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                    <Area type="monotone" dataKey="uv" strokeWidth={4} stroke="#ff8f17" fill="#fff7ee" />
                </AreaChart>
                <div className="btc-price">
                    <span className="dot"></span>
                    <span className="text">1BTC = </span>
                    <span className="text">$5.483</span>
                </div>
            </div>
          </div>
          <div className={`tab-item ${activeTab === 2 ? "active" : ""}`}>
          <div className="chart-content">
                <div className="lower-higher">
                    <div className="lower">
                        <span className="dot"></span>
                        <span className="text">Lower: </span>
                        <span className="text">$3.895</span>
                    </div>
                    <div className="higher">
                        <span className="dot"></span>
                        <span className="text">Higher: </span>
                        <span className="text">$4.857</span>
                    </div>
                </div>
                <AreaChart width={360} height={120} data={dataWeek} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                    <Area type="monotone" dataKey="uv" strokeWidth={4} stroke="#ff8f17" fill="#fff7ee" />
                </AreaChart>
                <div className="btc-price">
                    <span className="dot"></span>
                    <span className="text">1BTC = </span>
                    <span className="text">$3.483</span>
                </div>
            </div>
          </div>
          <div className={`tab-item ${activeTab === 3 ? "active" : ""}`}>
          <div className="chart-content">
                <div className="lower-higher">
                    <div className="lower">
                        <span className="dot"></span>
                        <span className="text">Lower: </span>
                        <span className="text">$4.895</span>
                    </div>
                    <div className="higher">
                        <span className="dot"></span>
                        <span className="text">Higher: </span>
                        <span className="text">$6.857</span>
                    </div>
                </div>
                <AreaChart width={360} height={120} data={dataMonth} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                    <Area type="monotone" dataKey="uv" strokeWidth={4} stroke="#ff8f17" fill="#fff7ee" />
                </AreaChart>
                <div className="btc-price">
                    <span className="dot"></span>
                    <span className="text">1BTC = </span>
                    <span className="text">$5.483</span>
                </div>
            </div>
          </div>
          <div className={`tab-item ${activeTab === 4 ? "active" : ""}`}>
          <div className="chart-content">
                <div className="lower-higher">
                    <div className="lower">
                        <span className="dot"></span>
                        <span className="text">Lower: </span>
                        <span className="text">$2.895</span>
                    </div>
                    <div className="higher">
                        <span className="dot"></span>
                        <span className="text">Higher: </span>
                        <span className="text">$6.857</span>
                    </div>
                </div>
                <AreaChart width={360} height={120} data={dataYear} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                    <Area type="monotone" dataKey="uv" strokeWidth={4} stroke="#ff8f17" fill="#fff7ee" />
                </AreaChart>
                <div className="btc-price">
                    <span className="dot"></span>
                    <span className="text">1BTC = </span>
                    <span className="text">$4.483</span>
                </div>
            </div>
          </div>
        </div>
      </div>

      <div className="but-sell-btc-wrap">
        <div className="bsbw-box">
          <span>
            <img src={BuyBtc} alt="Buy" />
          </span>
          <p>Buy BTC</p>
        </div>
        <div className="bsbw-box">
          <span>
            <img src={SellBtc} alt="Sell" />
          </span>
          <p>Buy BTC</p>
        </div>
      </div>
    </div>
  );
}
export default Home;
