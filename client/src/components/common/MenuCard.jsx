// import React from 'react';
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from '@/components/ui/card';
// import MenuImg from '../../assets/menu.png';
// const MenuCard = () => {
//   return (
//     <div>
//       <div>
//         <div className='h-min lg:flex jitify-center'>
//           <div className='p-10 '>
//             <Card>
//               <CardHeader>
//                 <img src={MenuImg} alt='menu image' />
//                 <CardTitle>Card Title</CardTitle>
//                 <CardDescription>Card Description</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <p>Card Content</p>
//               </CardContent>
//               <CardFooter>
//                 <p>Card Footer</p>
//               </CardFooter>
//             </Card>
//           </div>
//           <div className='p-10 '>
//             <Card>
//               <CardHeader>
//                 <img src={MenuImg} alt='menu image' />
//                 <CardTitle>Card Title</CardTitle>
//                 <CardDescription>Card Description</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <p>Card Content</p>
//               </CardContent>
//               <CardFooter>
//                 <p>Card Footer</p>
//               </CardFooter>
//             </Card>
//           </div>{' '}
//           <div className='p-10 '>
//             <Card>
//               <CardHeader>
//                 <img src={MenuImg} alt='menu image' />
//                 <CardTitle>Card Title</CardTitle>
//                 <CardDescription>Card Description</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <p>Card Content</p>
//               </CardContent>
//               <CardFooter>
//                 <p>Card Footer</p>
//               </CardFooter>
//             </Card>
//           </div>{' '}
//           <div className='p-10 '>
//             <Card>
//               <CardHeader>
//                 <img src={MenuImg} alt='menu image' />
//                 <CardTitle>Card Title</CardTitle>
//                 <CardDescription>Card Description</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <p>Card Content</p>
//               </CardContent>
//               <CardFooter>
//                 <p>Card Footer</p>
//               </CardFooter>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MenuCard;

import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import MenuImg from '../../assets/menu.png';

  const MImg = MenuImg;
  const CTitle = 'Card Title1';
  const CDescription = 'Card Description';
  const CContent = 'Card Content';
  const CFooter = 'Card Footer';



const MenuCard = () => {

  return (
    <div className='flex justify-center p-10'>
      <Card>
        <CardHeader>
          <img src={MenuImg} alt='menu image' />
          <CardTitle>{CTitle}</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default MenuCard;
