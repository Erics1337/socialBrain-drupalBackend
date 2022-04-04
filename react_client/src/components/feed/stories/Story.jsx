import Router from 'next/router';
import { useDrag } from 'react-dnd';
import { ItemTypes } from '../../../utilities/items';

function Story({ img, username, uid, group}) {

    const [{isDragging}, drag] = useDrag(() => ({
        type: ItemTypes.USER,
        item: {
            uid: uid,
            fromGroup: group,
          },
		collect: monitor => ({
		  isDragging: !!monitor.isDragging(),
		}),
	  }))

    return (
        <div 
        onClick={()=> Router.push(`/profile/${username}`)}>
            <span>
            <img
                    ref={drag}
                    style={{
                        opacity: isDragging ? 0.5 : 1,
                        fontSize: 25,
                        fontWeight: 'bold',
                        cursor: 'move',
                    }}
             className='h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain 
            cursor-pointer hover:scale-110 transition transform duration-200 ease-out'
             src={img} alt="" />
            <p className="text-xs w-14 truncate text-center">{username}</p>
            </span>
        </div>
    )
}

export default Story
