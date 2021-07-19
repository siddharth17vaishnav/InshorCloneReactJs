import React from 'react';
import './NewsCard.css'

const NewsCard = ({newsItem}) => {

    const fulldate = new Date(newsItem.publishedAt);
    var date=fulldate.toString().split(" ");
    const hour=parseInt(date[4].substring(0,2));
    const time=hour>12?true:false;
    return (
        <div className="newsCard">
           <img alt={newsItem.title} src={newsItem.urlToImage ? newsItem.urlToImage:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0HBggIBxIQEAcIDQoGCQkGEBIICg0NIB0iFhUdHx8YHiggGCYlGxMTITEhJSkrLi4uFx8zODMsNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAKoAqgMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAABAUGAwIB/8QAMRAAAgECAgcHBAIDAAAAAAAAAAIDAVIEFAUREjIzkqITFSEicoLBNEJzsmKxIzHR/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/ALsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJOAwlcVLq/1Gu8wEYGhXBQqurYp7/OespFYnKBnAaPKRWJyjKRWJygZwGjykVicoykVicoGcBo8pFYnKMpFYnKBnAaPKRWJyjKRWJygZwGjykVicoykVicoGcBo8pFYnKQdI6PVY2kgpq2d6MCqAAAAAAAALnQnBk9XwUxc6E4Enq+AI2mJWXErRa1ouynlQhdq11eYl6a+rX0IcsBhq4qXV/qNd5gOPatdXmHatdXmNBHhI0XUqU9TrtscMXo5JY2rFTZk+3Y3WApu1a6vMO1a6vMeGWqtstvKAPfatdXmHatdXmPAA99q11eYdq11eY8AD32rXV5h2rXV5jwAPfbNdXmNI3miba+5TMGnbhe0DMAAAAAAAAFzoTgSer4KYudCcCT1fAETTX1a+hCXoPV2El218ETTX1a+hDlgMXXCy7TeMbbygaEHKPExyrrRqEbF6QSBWoldqb7VTdArNI6s7Ns3EYM1WZmbxZt4AACdo/A1xLbb+EK9QHnAYGuJ87+EN1xyxeGbDSbD7v2tcaJVoq7K+Cruqc54VnjZHp5f1AzQO+LwzYaTYfd+1rjgANO3C9pmDTtwvaBmAAAAAAAAC50JwJPV8FMXOhOBJ6vgCJpr6tfxp8kEnaa+rX8af3UggAfVWrsqJTWzbql7gsCsEfnptSSb3/AKEE7SGBrhm208YW6Ro7A1nbtJfCL9gGj8DWdu1l8IV6i7VaKupfBVCrRV1L4Kp9AAADlPCs8bI9PL+pQ4vDNhpNh937WuNGcp4VnjZHp5f1AzRp24XtMwaduF7QMwAAAAAAAAXOhOBJ6vgpi50JwJPV8ARNNfVr+NP7qQlWrsqJTWzbqk3TX1a/jT+6kvQsS9k0mr/JtbG1/EDrgMFTDLrbxmbea0mAAfGWjLst4q28oVaKupfBVPoAAAAAAAAAyrbxp24XtMw28aduF7QMwAAAAAAAAXOhOBJ6vgpi50G3+KSn8gImmvq1/Gn91O+i8THFhtUrUo20/lGlMNJLOrxLrXZ2CHkZrK9IFznob1GehvUpsjNZXpGRmsr0gXOehvUZ6G9SmyM1lekZGayvSBc56G9Rnob1KbIzWV6RkZrK9IFznob1GehvUpsjNZXpGRmsr0gXOehvUZ6G9SmyM1lekZGayoEY07cL2lDkZrKl9J5YW2vtUDMAAAAAAAAHfCYpsLLtr4q28pwAF4uk4WXW1a0a11PXeMF3SxQgC+7xgu6WHeMF3SxQgC+7xgu6WHeMF3SxQgC+7xgu6WHeMF3SxQgC+7xgu6WHeMF3SxQgC+7xgu6WHeMF3SxQgC+7xgu6WIeP0j2sbRweEbbzP9xWgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/9k="}
           className="newsImage"
           />

           <div className="newsText">
               <div>
               <span className="title">
                   {newsItem.title}
               </span>
               <br/>
               <span className="author">
                   <a href={newsItem.url} target='__blank' ><b>short</b></a>{" "}
                  <span className="muted"> by{newsItem.author?newsItem.author:"unknown"} / {" "}
                  {
                      time?`${hour-12}:${date[4].substring(3,5)} pm` : `${hour}:${date[4].substring(3,5)} am`
                  } 
                  on {date[2]} {date[1]} {date[4]},{date[0]}
                  </span>
               </span>
               </div>
               <div className="lowerNewsText">
                    <div className="descriptions">
                        {newsItem.description}
                        <br/>
                        <span className="readmore">
                            read more at {""}
                            <a href={newsItem.url} target='__blank' style={{color:"#000000"}}><b>{newsItem.source.name}</b></a>
                        </span>
                    </div>
               </div>
           </div>
        </div>
    )
}

export default NewsCard
