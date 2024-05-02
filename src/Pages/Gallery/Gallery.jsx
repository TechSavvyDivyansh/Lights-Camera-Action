import React from 'react'
import ImageSlider from '../../Components/imageSlider/ImageSlider'


export default function Gallery() {

  let galleryImages=["https://dainikindia24x7.com/wp-content/uploads/2022/05/Runway-34-Heropanti-2.webp","https://i.guim.co.uk/img/media/aaa94f51b57d3e7e0e8725c18bd86c067e57cd9c/245_0_1667_1000/master/1667.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=13ef18738a94c97efd2daf215fde8bfe","https://static.independent.co.uk/2024/02/12/13/harry%20potter%20wand.jpg?width=1200&height=900&fit=crop","https://helios-i.mashable.com/imagery/articles/07l8BGgkmbOjbOw8PR8Wdim/hero-image.fill.size_1200x900.v1671059053.jpg","https://bsmedia.business-standard.com/_media/bs/img/article/2023-10/24/thumb/featurecrop/1200X900/1698142728-3367.png","https://filmfare.wwmindia.com/thumb/content/2019/may/studentoftheyear2tarasutariatigershroffananyapandayweb1557475647.jpg?width=1200&height=900","https://m.economictimes.com/thumb/msid-71472688,width-1200,height-900,resizemode-4,imgsize-242226/war-1.jpg","https://cdn.dnaindia.com/sites/default/files/2019/09/12/867185-pvr-1.jpg?im=FitAndFill=(1200,900)","https://www.theknowledgebank.co.in/wp-content/uploads/2022/08/PVR-Delhi.jpg"]

  return (
    <div className='gallery'>
      <ImageSlider images={galleryImages}/>
    </div>
  )
}
