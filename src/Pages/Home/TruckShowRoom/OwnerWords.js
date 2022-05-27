import React from 'react';
import owner from './owner.webp'

const OwnerWords = () => {
    return (
        <div class="card card-side bg-base-100 shadow-xl">
            <figure><img src={owner} alt="owner" /></figure>
            <div class="card-body">
                <h2 class="card-title">Mr Lal Sing</h2>
                <p>Owner of Truck Parst</p>
                <p>Truck part founded in 2004 and it was small a shop. By the time me and my team doing head work to develop our business.Now we are best tucks part dealer in town. We alwyas try to import best quality products as well as we ensure our customer satisfaction and we try provide best quality product to our customers. Recently we are opening our new truck Showroom.</p>
            </div>
        </div>
    );
};

export default OwnerWords;