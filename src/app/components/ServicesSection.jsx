// import dbConnect from '@/lib/dbConnect'
// import Image from 'next/image'
import dbConnect, { collectionNameObj } from '@/lib/dbConnect'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FaArrowRight } from "react-icons/fa";

export default async function ServicesSection() {

    // const res=await fetch("../../../public/services.json")
    // const data=await res.json();
    const serviceCollection = dbConnect(collectionNameObj.servicesCollection)
    const data= await serviceCollection.find({}).toArray()


// const data=[
//     {
        
//         "service_id": "04",
//         "title": "Engine Oil Change",
//         "img": "https://i.ibb.co/yn8nDfvt/888.jpg",
//         "price": "20.00",
//         "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nostrum dolores nemo quas. Minima ullam, veniam, nesciunt quae dolore animi blanditiis deserunt, ea esse dolorum ipsum quibusdam ipsa! Corrupti at, excepturi, fugiat aut nihil neque aliquid sapiente dignissimos provident, animi molestiae ipsum. Repudiandae ipsa id nihil reiciendis soluta eos ducimus pariatur, nam architecto tenetur quo quos commodi est libero repellendus vitae. Fuga numquam nulla nam, facere neque expedita voluptatibus pariatur necessitatibus vel, dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. Aspernatur ex quibusdam at cum nulla!",
//         "facility": [
//             {
//                 "name": "Instant Car Services",
//                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
//             },
//             {
//                 "name": "24/7 Quality Service",
//                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
//             },
//             {
//                 "name": "Easy Customer Service",
//                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
//             },
//             {
//                 "name": "Quality Cost Service",
//                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
//             }
//         ]
//     },
//     {
        
//         "service_id": "05",
//         "title": "Battery Charge",
//         "img": "https://i.ibb.co/ydCbDN3/5555.jpg",
//         "price": "20.00",
//         "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nostrum dolores nemo quas. Minima ullam, veniam, nesciunt quae dolore animi blanditiis deserunt, ea esse dolorum ipsum quibusdam ipsa! Corrupti at, excepturi, fugiat aut nihil neque aliquid sapiente dignissimos provident, animi molestiae ipsum. Repudiandae ipsa id nihil reiciendis soluta eos ducimus pariatur, nam architecto tenetur quo quos commodi est libero repellendus vitae. Fuga numquam nulla nam, facere neque expedita voluptatibus pariatur necessitatibus vel, dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. Aspernatur ex quibusdam at cum nulla!",
//         "facility": [
//             {
//                 "name": "Instant Car Services",
//                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
//             },
//             {
//                 "name": "24/7 Quality Service",
//                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
//             },
//             {
//                 "name": "Easy Customer Service",
//                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
//             },
//             {
//                 "name": "Quality Cost Service",
//                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
//             }
//         ]
//     },
//     {
        
//         "service_id": "01",
//         "title": "Full car Repair",
//         "img": "https://i.ibb.co/R6Z2nFM/55.jpg",
//         "price": "200.00",
//         "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nostrum dolores nemo quas. Minima ullam, veniam, nesciunt quae dolore animi blanditiis deserunt, ea esse dolorum ipsum quibusdam ipsa! Corrupti at, excepturi, fugiat aut nihil neque aliquid sapiente dignissimos provident, animi molestiae ipsum. Repudiandae ipsa id nihil reiciendis soluta eos ducimus pariatur, nam architecto tenetur quo quos commodi est libero repellendus vitae. Fuga numquam nulla nam, facere neque expedita voluptatibus pariatur necessitatibus vel, dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. Aspernatur ex quibusdam at cum nulla!",
//         "facility": [
//             {
//                 "name": "Instant Car Services",
//                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
//             },
//             {
//                 "name": "24/7 Quality Service",
//                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
//             },
//             {
//                 "name": "Easy Customer Service",
//                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
//             },
//             {
//                 "name": "Quality Cost Service",
//                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
//             }
//         ]
//     },
//     {
        
//         "service_id": "02",
//         "title": "Engine Repair",
//         "img": "https://i.ibb.co/5MvmD2g/88.jpg",
//         "price": "150.00",
//         "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nostrum dolores nemo quas. Minima ullam, veniam, nesciunt quae dolore animi blanditiis deserunt, ea esse dolorum ipsum quibusdam ipsa! Corrupti at, excepturi, fugiat aut nihil neque aliquid sapiente dignissimos provident, animi molestiae ipsum. Repudiandae ipsa id nihil reiciendis soluta eos ducimus pariatur, nam architecto tenetur quo quos commodi est libero repellendus vitae. Fuga numquam nulla nam, facere neque expedita voluptatibus pariatur necessitatibus vel, dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. Aspernatur ex quibusdam at cum nulla!",
//         "facility": [
//             {
//                 "name": "Instant Car Services",
//                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
//             },
//             {
//                 "name": "24/7 Quality Service",
//                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
//             },
//             {
//                 "name": "Easy Customer Service",
//                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
//             },
//             {
//                 "name": "Quality Cost Service",
//                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
//             }
//         ]
//     },
//     {
        
//         "service_id": "03",
//         "title": "Automatic Services",
//         "img": "https://i.ibb.co/wh7t3N3/555.jpg",
//         "price": "30.00",
//         "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nostrum dolores nemo quas. Minima ullam, veniam, nesciunt quae dolore animi blanditiis deserunt, ea esse dolorum ipsum quibusdam ipsa! Corrupti at, excepturi, fugiat aut nihil neque aliquid sapiente dignissimos provident, animi molestiae ipsum. Repudiandae ipsa id nihil reiciendis soluta eos ducimus pariatur, nam architecto tenetur quo quos commodi est libero repellendus vitae. Fuga numquam nulla nam, facere neque expedita voluptatibus pariatur necessitatibus vel, dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. Aspernatur ex quibusdam at cum nulla!",
//         "facility": [
//             {
//                 "name": "Instant Car Services",
//                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
//             },
//             {
//                 "name": "24/7 Quality Service",
//                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
//             },
//             {
//                 "name": "Easy Customer Service",
//                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
//             },
//             {
//                 "name": "Quality Cost Service",
//                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
//             }
//         ]
//     },
//     {
        
//         "service_id": "06",
//         "title": "Electrical System",
//         "img": "https://i.ibb.co/KzCG8qr/8888.jpg",
//         "price": "20.00",
//         "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nostrum dolores nemo quas. Minima ullam, veniam, nesciunt quae dolore animi blanditiis deserunt, ea esse dolorum ipsum quibusdam ipsa! Corrupti at, excepturi, fugiat aut nihil neque aliquid sapiente dignissimos provident, animi molestiae ipsum. Repudiandae ipsa id nihil reiciendis soluta eos ducimus pariatur, nam architecto tenetur quo quos commodi est libero repellendus vitae. Fuga numquam nulla nam, facere neque expedita voluptatibus pariatur necessitatibus vel, dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. Aspernatur ex quibusdam at cum nulla!",
//         "facility": [
//             {
//                 "name": "Instant Car Services",
//                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
//             },
//             {
//                 "name": "24/7 Quality Service",
//                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
//             },
//             {
//                 "name": "Easy Customer Service",
//                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
//             },
//             {
//                 "name": "Quality Cost Service",
//                 "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
//             }
//         ]
//     }
// ]

    
  return (
    <div className='grid grid-cols-12 gap-4 container mx-auto my-6'>
{/* {
    JSON.stringify(data)
} */}
        {
            data.map((item)=>{
  return (
    <div className='col-span-12 md:col-span-6 lg:col-span-4  h-full  shadow-2xl rounded-4xl' key={item._id}>
        {/* {JSON.stringify(item)} */}
        <figure className='w-full h-3/4 flex justify-center items-center'>
<Image className='w-full h-full object-fit' src={item.img} width={200} height={150} alt={item.title}/>
</figure>
<div className='flex justify-between items-center mt-4 mx-8'>
<div>
<h2 className='font-bold text-xl'>{item.title}</h2>

<p>{item.description.substring(0, 100)}...</p>

<h3 className='font-bold text-xl text-orange-500'>Price: ${item.price}</h3>

</div>
<div>
  <Link href={`/services/${item._id}`} className='text-orange-500'><FaArrowRight/></Link>

</div>
</div>


    </div>
  )
 
})
}
</div>
  )

}