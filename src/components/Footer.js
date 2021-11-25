import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from './Button'
import './Footer.css'

function Footer() {
    return (
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Únete a la comunidad que cuida de tus mascotas
                </p>
                <p className="footer-subscription-text">
                    Tú puedes
                </p>
                <div className='input-areas'>
                    <form>
                        <input type="email" name="email" placeholder="Tu correo" className="footer-input" />
                        <Button buttonStyle="btn--outline">Suscríbete</Button>
                    </form>
                </div>
            </section>
            <div class='footer-links'>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Términos de Servicio</Link>
                    </div>
                    <div class='footer-link-items'>
                        <h2>Contáctanos</h2>
                        <Link to='/'>Contacto</Link>
                        <Link to='/'>Emergencias</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>Videos</h2>
                        <Link to='/'>Productos</Link>
                        <Link to='/'>Servicios</Link>
                    </div>
                    <div class='footer-link-items'>
                        <h2>Redes Sociales</h2>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>Facebook</Link>
                        <Link to='/'>Youtube</Link>
                        <Link to='/'>Twitter</Link>
                    </div>
                </div>
            </div>
            <section class='social-media'>
                <div class='social-media-wrap'>
                    <div class='footer-logo'>
                        <Link to='/' className='social-logo'>
                            ChelseaVet 
                            <i class="fas fa-laptop-medical"></i>
                        </Link>
                    </div>
                    <small class='website-rights'>ChelseaVet © 2021</small>
                    <div class='social-icons'>
                        <Link
                            class='social-icon-link facebook'
                            to='/'
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <i class='fab fa-facebook-f' />
                        </Link>
                        <Link
                            class='social-icon-link instagram'
                            to='/'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <i class='fab fa-instagram' />
                        </Link>
                        <Link
                            class='social-icon-link youtube'
                            to='/'
                            target='_blank'
                            aria-label='Youtube'
                        >
                            <i class='fab fa-youtube' />
                        </Link>
                        <Link
                            class='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='Twitter'
                        >
                            <i class='fab fa-twitter' />
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Footer
