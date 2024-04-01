import { TagType } from '../tags-list'
import Typography from '../typography'

interface TagProps {
    tag: TagType
}

const Tag = ({ tag }: TagProps) => {
  return (
    <li className='border border-ring bg-accent w-full px-3 py-5 rounded-lg grid grid-cols-6 grid-row-3 place-items-stretch'>
        <Typography variant='h3' tag='h2' className='text-xl mb-2 col-start-1 col-end-6 row-start-1 row-end-1'>
          {tag.name}
        </Typography>
        <Typography variant='span' tag='p' className='col-start-1 col-end-4 row-start-3 row-end-3 flex flex-col items-start justify-center'>
          {tag.count} 
          <Typography tag="span" variant='subtitle' className='text-xs'>
            questions
          </Typography>
        </Typography>
        {tag.last_activity_date && (
          <Typography variant='subtitle' tag='p'  className='text-xs col-start-4 col-end-7 row-start-3 row-end-3 flex flex-col items-start justify-center'>
              Last activity: 
              <Typography tag="span" variant='span'>
                {new Date(tag.last_activity_date * 1000).toLocaleDateString()}
              </Typography>
          </Typography>
        )}
    </li>
  )
}

export default Tag