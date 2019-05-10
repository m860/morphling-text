type Props = {
    children?: string,
    style?: Object,
    width: number,
    height: number,
    scale: number
};

export default function (React) {
    function Text(props: Props) {
        let style = Object.assign({}, props.style, {
            width: props.width,
            height: props.height
        });
        let children = props.children;
        if ("fontSize" in style) {
            style.fontSize = style.fontSize * props.scale;
            //处理chrome字体小于12的问题，此时只处理字体元素
            if (style.fontSize < 12) {
                const textStyle = {
                    fontSize: 12,
                    transform: `scale(${style.fontSize / 12})`
                };
                children = (
                    <div style={textStyle}>{props.children}</div>
                );
            }
        }
        return <div style={style}>{children}</div>
    }

    Text.defaultProps = {
        text: "文本",
        style: {}
    };

    /**
     * 可编辑的属性
     */
    Text.getProperties = function () {
        return [];
    };

    return React.memo(Text);
}