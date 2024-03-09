import React, { useState } from 'react';
// import '../index.css';
import './style.css';
import 'primeicons/primeicons.css';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';

function Home() {
    const [modalClosed, setModalClosed] = useState(false);

    const closeModal = () => {
        setModalClosed(true);
    };

    return (
        <div>

            <div className={`overlay ${modalClosed ? 'closed' : ''}`} data-modal-overlay onClick={closeModal}></div>

            {/* <!--- MODAL --> */}

            <div className={`modal ${modalClosed ? 'closed' : ''}`} data-modal>

                <div className="modal-close-overlay" data-modal-overlay onClick={closeModal}></div>

                <div class="modal-content">

                    <button class="modal-close-btn" data-modal-close onClick={closeModal}>
                        <ion-icon name="close-outline"></ion-icon>
                    </button>

                    <div class="newsletter-img">
                        <img src="/colour-flowers-white-pot-isolated-white.jpg" alt="subscribe newsletter" width="400" />
                    </div>

                    <div class="newsletter">

                        <form action="#">

                            <div class="newsletter-header">

                                <h3 class="newsletter-title">Subscribe Newsletter.</h3>

                                <p class="newsletter-desc">
                                    Subscribe the <b>Anon</b> to get latest products and discount update.
                                </p>

                            </div>

                            <input type="email" name="email" class="email-field" placeholder="Email Address" required />

                            <button type="submit" class="btn-newsletter">Subscribe</button>

                        </form>

                    </div>

                </div>
            </div>

            {/* <!--- NOTIFICATION TOAST --> */}

            <div class="notification-toast" data-toast>

                <button class="toast-close-btn" data-toast-close>
                    <ion-icon name="close-outline"></ion-icon>
                </button>

                <div class="toast-banner">
                    <img src="/beautiful-violet-flowers.jpg" alt="Rose Gold Earrings" width="80" height="70" />
                </div>

                <div class="toast-detail">

                    <p class="toast-message">
                        Someone in new just bought
                    </p>

                    <p class="toast-title">
                        Rose Plant
                    </p>

                    <p class="toast-meta">
                        <time datetime="PT2M">2 Minutes</time> ago
                    </p>

                </div>

            </div>
            <Header />
            <Main />
        </div>
    );
}

export default Home;
