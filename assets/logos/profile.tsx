import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const SvgComponent = (props: SvgProps) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={100}
        height={100}
        viewBox="0 0 20 20"
        fill={"currentColor"}
        {...props}
    >
        <Path
            d="M10 12c3.785 0 6.958 2.214 7.784 6H2.216c.826-3.786 3.999-6 7.784-6M6 6c0-2.206 1.794-4 4-4s4 1.794 4 4-1.794 4-4 4-4-1.794-4-4m7.758 4.673A5.983 5.983 0 0 0 16 6a6 6 0 1 0-9.758 4.673C2.583 12.048 0 15.445 0 20h20c0-4.555-2.583-7.952-6.242-9.327"
        />
    </Svg>
)

export { SvgComponent as ProfileIcon }
