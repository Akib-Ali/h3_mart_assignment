import Styles from "./header.module.css"
export const Header = () => {

    var data = [
        {
            title: "MARKETCAP",
            value: "$1.15T"
        },
        {
            title: "EXCHANGE VOL",
            value: "$50.69"
        },
        {
            title: "ASSESTS",
            value: "2,295"
        }, {
            title: "EXCHANGES",
            value: "73"
        }, {
            title: "MARKETS",
            value: "14,054"
        },
        {
            title: "BTC DOM INDEX",
            value: "31.9%"
        },

    ]
    return (
        <div className={Styles.container}>

            {data.map((elem) => (
                <div className={Styles.data}>

                    <div>{elem.title}</div>
                    <div className={Styles.value}>{elem.value}</div>
                </div>

            ))}
        </div>
    )
}