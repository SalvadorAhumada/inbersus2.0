import React, { useEffect, useState } from "react";
import "./style/styles.css";
import XLSX from "xlsx";
import { Animated } from "react-animated-css";

export default function Table(props) {
    const formatNumber = number => {
        const options = { style: "currency", currency: "USD" };
        const numberFormat = new Intl.NumberFormat("en-US", options);
        return numberFormat.format(number);
    };

    const [animation, setAnimation] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            props.loadingState();
        }, 0);

        let header = document.getElementById("inline-table");
        let fixed = document.getElementById("fix-table");
        window.addEventListener("scroll", function (e) {
            if (window.scrollY - 500 > header.getBoundingClientRect().top) {
                fixed.style.display = "inline";
                fixed.style.position = "fixed";
                fixed.style.top = "0";
                fixed.style.left = "50%";
                fixed.style.transform = "translate(-50%,0)";
            } else {
                fixed.style.display = "none";
            }
        });
    });

    const downloadTable = () => {
        document.body.style.cursor = "wait";
        var downloadTime = new Date();
        var day = downloadTime.getDate();
        var month = downloadTime.getMonth() + 1;
        var year = downloadTime.getFullYear();
        var dom = document.getElementById("download-table");
        const wb = XLSX.utils.table_to_book(dom, { sheet: "inbersus" });
        document.body.style.cursor = "auto";
        return XLSX.writeFile(wb, `inbersus_${day}_${month}_${year}.xlsx`);
    };

    const isVisible = () => {
        return animation;
    }

    const redoInvestment = () => {
        setAnimation(false)
        setTimeout(() => {
            props.redo();
        }, 1000);
    };

    return (
        <div className="table-wrapper">
            <table>
                <thead id="fix-table">
                    <tr className="head">
                        <th>Año</th>
                        <th>Mes</th>
                        <th>Cantidad ahorrada</th>
                        <th>Inversion Total</th>
                        <th>Retorno</th>
                    </tr>
                </thead>
            </table>
            <table id="download-table">
                <thead id="inline-table">
                    <tr className="head">
                        <th>Año</th>
                        <th>Mes</th>
                        <th>Cantidad ahorrada</th>
                        <th>Inversion Total</th>
                        <th>Retorno</th>
                    </tr>
                </thead>
                <tbody className="body">
                    {props.results.map((month, index) => (
                        <tr key={index}>
                            <th>{(index + 1) % 12 === 0 ? `${(index + 1) / 12}` : ""}</th>
                            <th>{index + 1}</th>
                            <th>{formatNumber(month.month.savings)}</th>
                            <th>{formatNumber(month.month.investment)}</th>
                            <th>
                                {formatNumber(month.month.investment - month.month.savings)}
                            </th>
                        </tr>
                    ))}
                </tbody>
        ;
      </table>
            <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={isVisible()}>
                <div className="download">
                    <button onClick={redoInvestment}>
                        Crear otra simulación <i className="material-icons">cached</i>
                    </button>
                    <button onClick={downloadTable}>
                        Descargar XLSX <i className="material-icons">file_download</i>
                    </button>
                </div>
            </Animated>
        </div>
    );
}
