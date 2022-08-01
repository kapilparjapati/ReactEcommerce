import logo from './logo.svg';
import './css/main.css';

function Footer() {
  return (

           <footer>
            <div className="container">
             <div className="row">
               <div className="col-lg-6 col-md-6 col-12">
                 <div className="copyright">
                   <p>&copy; React Js All Right Reserved Developed By <a href="#">Kapil Prajapati</a></p>
                  </div>
               </div>
               <div className="col-lg-6 col-md-6 col-12">
                  <div className="footer-link">
                     <ul>
                       <li><a href="#">Home</a></li>
                       <li><a href="#">About</a></li>
                       <li><a href="#">Product</a></li>
                       <li><a href="#">Contact</a></li>
                     </ul>
                   </div>
               </div>
             </div>
            </div>
           </footer>
  );
}

export default Footer;
