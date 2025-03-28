import { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// Currency Data
const currencies = [
    { code: "AUD", name: "Australian Dollar", flag: "/flags/aud.png" },
    { code: "INR", name: "Indian Rupee", flag: "/flags/inr.png" },
    { code: "BDT", name: "Bangladeshi Taka", flag: "/flags/bdt.png" },
    { code: "FJD", name: "Fijian Dollar", flag: "/flags/fjd.png" },
    { code: "LKR", name: "Sri Lankan Rupee", flag: "/flags/lkr.png" },
    { code: "NPR", name: "Nepalese Rupee", flag: "/flags/npr.png" },
    { code: "PKR", name: "Pakistani Rupee", flag: "/flags/pkr.png" },
];

const Calculator = () => {
    const navigate = useNavigate(); // ✅ Call useNavigate inside the component
    const [sendCurrency, setSendCurrency] = useState(currencies[0]); // Default AUD
    const [receiveCurrency, setReceiveCurrency] = useState(currencies[1]); // Default INR
    const [amount, setAmount] = useState(2500);
    const [exchangeRate, setExchangeRate] = useState(20);
    const [dropdownOpen, setDropdownOpen] = useState({ send: false, receive: false });

    const convertedAmount = amount * exchangeRate;

    // Ref to detect clicks outside dropdown
    const dropdownRef = useRef();

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen({ send: false, receive: false });
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div ref={dropdownRef} className="bg-[#00374A] shadow-lg rounded-xl p-6 w-full md:max-w-xl">
            {/* You Send */}
            <p className="text-white font-medium mb-2">You Send</p>
            <div className="relative flex items-center border border-[#E2FF54] rounded-[20px] mt-2 bg-gray-50">
                {/* Currency Dropdown */}
                <div className="relative w-40">
                    <button
                        onClick={() => setDropdownOpen({ ...dropdownOpen, send: !dropdownOpen.send })}
                        className="flex items-center justify-between bg-black text-white px-3 py-4 rounded-[20px] w-full"
                    >
                        <img src={sendCurrency.flag} alt={sendCurrency.code} className="w-6 h-6 mr-2" />
                        <span>{sendCurrency.code}</span>
                        {/* 🔥 Rotate icon when open */}
                        <FaChevronDown className={`ml-auto text-xs transition-transform ${dropdownOpen.send ? "rotate-180" : "rotate-0"}`} />
                    </button>
                    {/* Dropdown */}
                    {dropdownOpen.send && (
                        <div className="absolute bg-gray-50 shadow-md mt-2 w-full h-60 overflow-x-scroll rounded-md z-10">
                            {currencies.map((currency) => (
                                <button
                                    key={currency.code}
                                    onClick={() => {
                                        setSendCurrency(currency);
                                        setDropdownOpen({ ...dropdownOpen, send: false });
                                    }}
                                    className="flex items-center px-4 py-2 hover:bg-gray-200 w-full"
                                >
                                    <img src={currency.flag} alt={currency.code} className="w-6 h-6 mr-2" />
                                    <span>{currency.code} - {currency.name}</span>
                                </button>
                            ))}
                        </div>
                    )}
                </div>
                {/* Amount Input */}
                <input
                    type=""
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    className="ml-auto w-24 md:w-48 text-right text-black font-bold bg-transparent focus:outline-none px-4 py-4"
                />
            </div>

            {/* Exchange Info */}
            <div className="my-3 mt-4 mb-4 space-y-4 text-sm text-white">
                <p>Exchange rate <span className="float-right">✖ {exchangeRate}</span></p>
                <hr />
                <p>Transaction fees <span className="float-right">➕ £ 0.00</span></p>
                <hr />
                <p>Converted amount <span className="float-right">➡ £ {convertedAmount.toFixed(2)}</span></p>
                <hr />
            </div>

            {/* Recipient Gets */}
            <p className="text-white font-medium mt-4 mb-2">Recipient Gets</p>
            <div className="relative flex items-center border border-[#E2FF54] rounded-[20px] mt-2 bg-gray-50">
                {/* Currency Dropdown */}
                <div className="relative w-40">
                    <button
                        onClick={() => setDropdownOpen({ ...dropdownOpen, receive: !dropdownOpen.receive })}
                        className="flex items-center justify-between bg-black text-white px-3 py-4 rounded-[20px] w-full"
                    >
                        <img src={receiveCurrency.flag} alt={receiveCurrency.code} className="w-6 h-6 mr-2" />
                        <span>{receiveCurrency.code}</span>
                        {/* 🔥 Rotate icon when open */}
                        <FaChevronDown className={`ml-auto text-xs transition-transform ${dropdownOpen.receive ? "rotate-180" : "rotate-0"}`} />
                    </button>
                    {/* Dropdown */}
                    {dropdownOpen.receive && (
                        <div className="absolute bg-white shadow-md mt-2 w-full h-60 overflow-x-scroll rounded-md z-10">
                            {currencies.map((currency) => (
                                <button
                                    key={currency.code}
                                    onClick={() => {
                                        setReceiveCurrency(currency);
                                        setDropdownOpen({ ...dropdownOpen, receive: false });
                                    }}
                                    className="flex items-center px-4 py-2 hover:bg-gray-200 w-full"
                                >
                                    <img src={currency.flag} alt={currency.code} className="w-6 h-6 mr-2" />
                                    <span>{currency.code} - {currency.name}</span>
                                </button>
                            ))}
                        </div>
                    )}
                </div>
                {/* Converted Amount */}
                <input
                    type="text"
                    value={`₹ ${convertedAmount.toFixed(2)}`}
                    className="ml-auto w-24 md:w-48 text-right text-gray-700 font-bold bg-transparent focus:outline-none px-4 py-4"
                    readOnly
                />
            </div>

            {/* Send Button */}
            <button
                className="w-full bg-[#E2FF54] text-black py-3 mt-6 rounded-lg hover:bg-[#E2FF54] transition duration-300 ease-in-out transform hover:scale-105 active:scale-95"
                onClick={() => navigate("/send-money")} // ✅ Correctly defined navigate here
            >
                Send
            </button>
        </div>
    );
};

export default Calculator;
