import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../components/NavBar/NavBar'
import styles from '../styles/Home.module.scss'
import img1 from '../public/gallery/1.jpg'
import img2 from '../public/gallery/2.jpg'
import img3 from '../public/gallery/3.jpg'
import img4 from '../public/gallery/4.jpg'
import img5 from '../public/gallery/5.jpg'
import img6 from '../public/gallery/6.jpg'
import img7 from '../public/gallery/7.jpg'
import img8 from '../public/gallery/8.jpg'
import img9 from '../public/gallery/9.jpg'
import img10 from '../public/gallery/10.jpg'
import img11 from '../public/gallery/11.jpg'



export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gallery</title>
      </Head>
      <NavBar />
      <main className={styles.PageContainer}>
        <section className={styles.imgContainer}>
        <div className={styles.STop}>
          <h1>My best gallery</h1>
          <p className={styles.b}>Has 72 photos and videos</p>
          <div className={styles.flexCategories}>
            <span className={styles.active}>All</span>
            <span>Videos</span>
            <span>Photos</span>
            <span>Most viewed</span>
            <span>Least watched</span>

          </div>
          <div className={styles.btnContainer}>
            <a href="#">
              <i className="ri-landscape-line"></i>
              Edit gallery
            </a>
            <a href="#" className={styles.active}>
              <i className="ri-add-fill"></i> Add New
            </a>
          </div>
        </div>
          <div className={styles.ImgLine}>
            <div>
              <i className="ri-more-line"></i>
              <main><p>28/09</p>
              <h3>Your Picture</h3></main>
              <Image src={img1}></Image>
            </div>
            <div>
              <i className="ri-more-line"></i>
              <main><p>28/09</p>
              <h3>Your Picture</h3></main>
              <Image src={img2}></Image>
            </div>
            <div>
              <i className="ri-more-line"></i>
              <main><p>28/09</p>
              <h3>Your Picture</h3></main>
              <Image src={img3}></Image>
            </div>
            <div>
              <i className="ri-more-line"></i>
              <main><p>28/09</p>
              <h3>Your Picture</h3></main>
              <Image src={img4}></Image>
            </div>
            <div>
              <i className="ri-more-line"></i>
              <main><p>28/09</p>
              <h3>Your Picture</h3></main>
              <Image src={img5}></Image>
            </div>
            <div>
              <i className="ri-more-line"></i>
              <main><p>28/09</p>
              <h3>Your Picture</h3></main>
              <Image src={img6}></Image>
            </div>
            
          </div>
          <div className={styles.ImgLine}>
            <div>
              <i className="ri-more-line"></i>
              <main><p>28/09</p>
              <h3>Your Picture</h3></main>
              <Image src={img7}></Image>
            </div>
            <div>
              <i className="ri-more-line"></i>
              <main><p>28/09</p>
              <h3>Your Picture</h3></main>
              <Image src={img8}></Image>
            </div>
            <div>
              <i className="ri-more-line"></i>
              <main><p>28/09</p>
              <h3>Your Picture</h3></main>
              <Image src={img9}></Image>
            </div>
            <div>
              <i className="ri-more-line"></i>
              <main><p>28/09</p>
              <h3>Your Picture</h3></main>
              <Image src={img10}></Image>
            </div>
            <div>
              <i className="ri-more-line"></i>
              <main><p>28/09</p>
              <h3>Your Picture</h3></main>
              <Image src={img11}></Image>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
