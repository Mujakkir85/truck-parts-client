import React from 'react';
import moneyicon from './moneyicon.png'
import taskicon from './taskicon.jpg'

const Summary = () => {
    return (
        <div>
            <div class="stats grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">

                <div class="stat gap-x-2">
                    <div class="stat-figure text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    </div>
                    <div class="text-black">Total Likes</div>
                    <div class="stat-value text-primary">12.6K</div>
                    <div class="text-black">15% more than last three month</div>
                </div>

                <div class="stat gap-x-2">
                    <div class="stat-figure text-secondary">
                        <img className='w-20' src={moneyicon} alt="" />
                    </div>
                    <div class="text-black">Total sell</div>
                    <div class="stat-value text-primary">10M</div>
                    <div class="text-black">30% more than last three month</div>
                </div>

                <div class="stat">
                    <div class="stat-figure text-secondary">
                        <img className='w-20' src={taskicon} alt="" />
                    </div>
                    <div class="stat-value text-primary">90%</div>
                    <div class="text-black">Tasks done</div>
                    <div class="text-black">31 tasks remaining</div>
                </div>

            </div>
        </div>
    );
};

export default Summary;