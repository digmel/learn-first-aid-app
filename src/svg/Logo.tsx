import React, {FC} from 'react';
import type {SvgProps} from 'react-native-svg';
import Svg, {Path, Defs, Stop, LinearGradient, Line} from 'react-native-svg';

export const Logo: FC<SvgProps> = ({width = 102, height = 103}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none">
      <Path
        d="M101.976 10.2387C85.9932 3.49313 68.6013 0 51 0C33.3987 0 16.0068 3.49313 0.0236707 10.2387C-0.599113 57.0667 10.9293 92.9293 51 103C91.0696 92.9293 102.599 57.0667 101.976 10.2387Z"
        fill="#094B61"
      />
      <Path
        d="M96.3981 35.1467C95.7929 41.7604 94.7224 48.3229 93.1944 54.7852C92.1053 59.3781 90.6713 63.8819 88.9048 68.258C85.954 75.7863 81.5653 82.6644 75.9854 88.5059C72.6992 91.871 68.9701 94.7702 64.9014 97.1234C62.2584 98.6505 59.4979 99.9631 56.646 101.049C54.7854 101.761 52.8476 102.396 50.8325 102.953C50.0056 102.719 49.2049 102.486 48.4042 102.228C39.0097 99.3849 30.5703 94.0181 24.0005 86.7089C11.444 72.6403 5.92708 51.5894 4.62227 26.38C4.35118 21.1724 4.25651 15.7921 4.33825 10.239C8.56022 8.37014 12.8816 6.73554 17.2827 5.34275C19.9182 4.50202 22.5577 3.76367 25.2016 3.12752C28.1854 2.40239 31.1576 1.80644 34.1414 1.34088C38.5933 0.635671 43.085 0.211659 47.5899 0.0713705C48.6746 0.0324866 49.7604 0.019928 50.8451 0.019928C56.3899 0.0200291 61.9264 0.453171 67.4042 1.31561C70.4791 1.79483 73.554 2.41697 76.6269 3.15471C80.128 4.01016 83.6292 5.03804 87.1303 6.23819C90.5406 7.40365 93.9426 8.73827 97.3487 10.2411C97.4678 18.5539 97.1505 26.8673 96.3981 35.1467Z"
        fill="url(#paint0_linear_502:790)"
      />
      <Path
        d="M85.5858 31.104C85.339 37.759 84.5833 44.3852 83.3252 50.9242C82.5116 55.1359 81.3548 59.2735 79.8666 63.2956C78.0725 68.2581 75.5229 72.9121 72.3082 77.092C70.6557 79.2127 68.7948 81.1614 66.7535 82.9088C65.122 84.3054 63.3761 85.562 61.5343 86.6648C59.4881 87.8981 57.3402 88.9529 55.114 89.8176C54.5072 90.0509 53.8869 90.2841 53.2538 90.5038C52.4657 90.776 51.6513 91.0218 50.8244 91.2551C48.9967 90.7383 47.202 90.1108 45.4501 89.3761C44.9847 89.1817 44.5204 88.9747 44.0676 88.7677C22.0587 78.5738 15.5043 52.6162 15.891 19.6048C17.635 18.8145 19.3925 18.0758 21.1312 17.3979C21.4802 17.2561 21.8418 17.1257 22.1908 16.9964C24.4388 16.1672 26.6734 15.4285 28.9214 14.7895C29.5502 14.6087 30.2 14.4396 30.833 14.2715C33.146 13.6756 35.4704 13.17 37.7835 12.7812C39.8376 12.4312 41.8919 12.1728 43.9461 11.991C46.2329 11.7808 48.5197 11.6756 50.7929 11.6756H51.2834C55.4133 11.7014 59.5346 12.0567 63.6084 12.7381C66.2697 13.1788 68.9351 13.7576 71.6048 14.4743C74.8807 15.3577 78.1028 16.4304 81.2552 17.687C82.7539 18.2702 84.2391 18.9038 85.7252 19.5785C85.8028 23.5384 85.7545 27.3858 85.5858 31.104Z"
        fill="#094B61"
      />
      <Line x1="51" y1="31" x2="51" y2="71" stroke="white" strokeWidth="16" />
      <Line x1="71" y1="51" x2="31" y2="51" stroke="white" strokeWidth="16" />
      <Defs>
        <LinearGradient
          id="paint0_linear_502:790"
          x1="50.8415"
          y1="0.019928"
          x2="50.8415"
          y2="102.953"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#EAF4F8" />
          <Stop offset="1" stopColor="#9ECEDE" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};
