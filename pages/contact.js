// /* eslint-disable react/prop-types */
// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { Box, Flex, Text } from '../components/ui';
// import Header from '../components/ui/Header';
// import Navbar from '../components/ui/Navbar';
// import FlyUpText from '../components/composite/FlyUpText';
// import {
//   DARK_TITLE_COLOR, easingFunction, PRIMARY_COLOR, PRIMARY_FONT,
//   PRIMARY_HOVER_COLOR, SECONDARY_COLOR, SUBTITLE_COLOR, WHITE,
//   PRIMARY_COLOR_TRANSLUCENT,
// } from '../utils/theme';
// import Footer from '../components/ui/Footer';
// import AccentBar from '../components/composite/AccentBar';

// const Button = styled.button`
//   background-color: ${PRIMARY_COLOR};
//   border: none;
//   outline: none;
//   color: ${WHITE};
//   font-size: 1.2rem;
//   font-family: ${PRIMARY_FONT};
//   border-radius: 2px;
//   padding: 12px 25px;
//   position: relative;
//   cursor: pointer;
//   transition: background-color 0.4s ${easingFunction};
//   box-shadow: 8px 8px ${PRIMARY_COLOR_TRANSLUCENT};

//   &:hover {
//     background-color: ${PRIMARY_HOVER_COLOR};
//   }
// `;

// const TextWithHover = styled(Text)`
//   cursor: pointer;
// `;

// const IconFadeIn = styled.i`
//   color: ${PRIMARY_COLOR};
//   opacity: ${(props) => (props.isHover ? 1 : 0)};
//   transform: ${(props) => (props.isHover ? 'translateX(0px)' : 'translateX(-50px)')};
//   transition: opacity 0.4s ${easingFunction}, transform 0.15s ${easingFunction};
// `;

// const TextWithHoverArrow = ({ text }) => {
//   const [isHover, setHover] = useState(false);

//   return (
//     <Flex style={{ position: 'relative' }}>
//       <Box style={{ overflow: 'hidden', position: 'absolute', left: -20 }}>
//         <IconFadeIn className="fa fa-chevron-right" isHover={isHover} />
//       </Box>
//       <TextWithHover
//         left
//         bold
//         color={SUBTITLE_COLOR}
//         onMouseEnter={() => setHover(true)}
//         onMouseLeave={() => setHover(false)}
//       >
//         {text}
//       </TextWithHover>
//     </Flex>
//   );
// };

// const ContactPage = () => (
//   <>
//     <Flex width={1} background={WHITE}>
//       <Box width={0.5}>
//         <a href="https://www.google.com/maps/place/Cincinnati,+OH/">
//           <img width="100%" src="/cincinnati.png" alt="Map" />
//         </a>
//       </Box>
//       <Flex width={0.5} column>
//         <Box width={1} mb={5} background={SECONDARY_COLOR} height="25%" />
//         <Flex width={1} pl={5} column>
//           <FlyUpText fontSize="5rem" color={PRIMARY_COLOR} weight={700} letterSpacing={-2.56}>
//             {'Hello'}
//           </FlyUpText>
//           <Box style={{ overflow: 'hidden' }} mt={4}>
//             <FlyUpText delayMultiplier={2} fontSize="3rem" color={DARK_TITLE_COLOR} weight={700} letterSpacing={-2.56}>
//               {'Let\'s touch base.'}
//             </FlyUpText>
//           </Box>
//           <Flex mt={48} column>
//             <Box>
//               <Text thin uppercase color={SUBTITLE_COLOR}>
//                 {'Will Germany'}
//               </Text>
//             </Box>
//             <Box mt={4}>
//               <a href="https://www.google.com/maps/place/Cincinnati,+OH/" style={{ textDecoration: 'none' }}>
//                 <TextWithHoverArrow text="Cincinnati, Ohio" />
//               </a>
//             </Box>
//             <Box mt={3}>
//               <a href="mailto:me@williamgermany.com" style={{ textDecoration: 'none' }}>
//                 <TextWithHoverArrow text="me@williamgermany.com" />
//               </a>
//             </Box>
//             <Box mt={3}>
//               <a href="https://linkedin.com/in/williamgermany" style={{ textDecoration: 'none' }}>
//                 <TextWithHoverArrow text="https://linkedin.com/in/williamgermany" />
//               </a>
//             </Box>
//           </Flex>
//         </Flex>
//       </Flex>
//     </Flex>
//     <Flex column background={WHITE} pb="100px" mb={50} mt="-5px" pt={5} align="center">
//       <AccentBar />
//       <Box mt={6}>
//         <FlyUpText center fontSize="5rem" color={PRIMARY_COLOR} weight={700} letterSpacing={-2.56}>
//           {'Openings'}
//         </FlyUpText>
//       </Box>
//       <Box style={{ overflow: 'hidden' }} mt={4}>
//         <FlyUpText delayMultiplier={2} fontSize="3rem" color={DARK_TITLE_COLOR} weight={700} letterSpacing={-2.56}>
//           {'I\'m available for work.'}
//         </FlyUpText>
//       </Box>
//       <Box width={1} maxWidth="1280px" mt={4} px={7}>
//         <Text center fontSize="1.2rem" color={SUBTITLE_COLOR} letterSpacing={-0.3}>
//           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt adipisci cupiditate corrupti impedit quos nemo asperiores magnam <strong style={{ fontWeight: 'bolder' }}>tempora ab consequatur</strong> ipsam saepe repellat nisi, reiciendis quidem quia molestias doloremque dolorum soluta eos molestiae corporis! Laboriosam totam consectetur quos modi eius?
//         </Text>
//         <br />
//         <Text center fontSize="1.2rem" color={SUBTITLE_COLOR} letterSpacing={-0.3}>
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit. <strong style={{ fontWeight: 'bolder' }}>Necessitatibus</strong> ex sint quia quasi, vitae consequatur dicta. Adipisci omnis molestias vero, praesentium natus autem ex voluptatibus accusamus animi itaque beatae pariatur distinctio mollitia qui vitae ut.
//         </Text>
//       </Box>
//       <Box mt={5} mb={6}>
//         <Button>
//           Get in touch
//         </Button>
//       </Box>
//       <AccentBar reversed />
//     </Flex>
//     <Footer />
//   </>
// );

// ContactPage.displayName = 'ContactPage';

// ContactPage.propTypes = {

// };

// ContactPage.defaultProps = {

// };

// export default ContactPage;
