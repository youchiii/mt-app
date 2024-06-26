export const CloloredMessage = (props) => {

    const { color, children} = props //propsを予め分割代入

    const contentStyle = {
        color: color,　//分割代入をすることでcolor: props.colorと記述しなくてよくなる。
        fontSize: "20px"
    }

    return <p style={contentStyle}>{children}</p>//分割代入をしりことでprops.childrenと記述しなくてよくなる。
}