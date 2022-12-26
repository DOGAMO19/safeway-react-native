import { StyleSheet, Text, View } from 'react-native'
// import * as  from 'react-native-svg';
import Svg, { G, LinearGradient, Path, Stop } from 'react-native-svg';

export const BackgroundImage = () => {
    return(
      <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={705}
      height={456}
      preserveAspectRatio="xMidYMid"
      style={{
        zIndex: 1,
        marginRight: "-2px",
        display: "block",
        backgroundRepeatY: "initial",
        backgroundRepeatX: "initial",
        backgroundColor: "#f1f2f3",
        animationPlayState: "paused",
      }}
    >
      <G
        style={{
          transform: "matrix(1,0,0,1,0,0)",
          animationPlayState: "paused",
        }}
      >
        <LinearGradient
          id="a"
          x1={0}
          x2={1}
          y1={0}
          y2={0}
          style={{
            animationPlayState: "paused",
          }}
        >
          <Stop
            stopColor="#008fd4"
            offset={0}
            style={{
              animationPlayState: "paused",
            }}
          />
          <Stop
            stopColor="#001f2d"
            offset={1}
            style={{
              animationPlayState: "paused",
            }}
          />
        </LinearGradient>
        <Path
          d="M0 0v436.757q70.5-30.827 141-52.345t141-94.701 141-32.85 141 21.246 141-104.714V0Z"
          fill="url(#a)"
          opacity={0.4}
          style={{
            opacity: 0.4,
            animationPlayState: "paused",
          }}
        />
        <Path
          d="M0 0v385.832q70.5 13.798 141-17.072t141-20.554 141-85.468 141-20.512 141-26.867V0Z"
          fill="url(#a)"
          opacity={0.4}
          style={{
            opacity: 0.4,
            animationPlayState: "paused",
          }}
        />
        <Path
          d="M0 0v450.248q70.5-22.175 141-61.948t141-27.375 141-68.495 141-56.813 141-8.969V0Z"
          fill="url(#a)"
          opacity={0.4}
          style={{
            opacity: 0.4,
            animationPlayState: "paused",
          }}
        />
        <Path
          d="M0 0v404.362q70.5-14.603 141-54.394t141-46.741 141-27.782 141-42.669 141-13.264V0Z"
          fill="url(#a)"
          opacity={0.4}
          style={{
            opacity: 0.4,
            animationPlayState: "paused",
          }}
        />
        <Path
          d="M0 0v431.476q70.5 4.098 141-33.409t141-59.836 141-62.299 141-24.767 141-94.901V0Z"
          fill="url(#a)"
          opacity={0.4}
          style={{
            opacity: 0.4,
            animationPlayState: "paused",
          }}
        />
      </G>
    </Svg>
    );
  }



const styles = StyleSheet.create({})