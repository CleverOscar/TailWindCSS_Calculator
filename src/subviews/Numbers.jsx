import react from 'react'

export default function Numbers () {
    return(
        <ul className=" 

                        
                        w-3/4 
                        grid grid-cols-3 gap-3
                        text-3xl
                        text-center
                        items-center
                        
                        ">
            <li className='
                        bg-gray-900
                        rounded-full
                        p-5
                        '>
                AC
            </li>
            <li
                className='bg-gray-900
                rounded-full
                
                
                p-5'
            >
                &#177;
            </li>
            <li 
            className='bg-gray-900
            rounded-[50%]
            
            p-5'>
                &#37;
            </li>
            <li
            className='bg-gray-900
            rounded-full
            
            p-5'>
                7
            </li>
            <li className='bg-gray-900
                rounded-full
                
                p-5'>
                8
            </li>
            <li className='bg-gray-900
                rounded-full
                
                p-5'>
                9
            </li>
            <li className='bg-gray-900
                rounded-full
                
                p-5'>
                4
            </li>
            <li className='bg-gray-900
                rounded-full
                
                p-5'>
                5
            </li>
            <li className='bg-gray-900
                rounded-full
                
                p-5'>
                6
            </li>
            <li className='bg-gray-900
                rounded-full
                
                p-5'>
                1
            </li>
            <li className='bg-gray-900
                rounded-full
                
                p-5'>
                2
            </li>
            <li className='bg-gray-900
                rounded-full
                
                p-5'>
                3
            </li>
            <li className=' bg-gray-900 rounded-full p-5 col-span-2 text-left'>
                0
            </li>
            <li className='bg-gray-900
                rounded-full
                
                p-5'>
                .
            </li>
        </ul>
    )
}