import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import RenderTag from './RenderTag'
const hotQuestions = [
    {_id:"1",title:"How Are You,is it true that you are dumb and every one uses you , hehe you dumb🤣🤣"},
    {_id:"2",title:"How Are You,is it true that you are dumb and every one uses you , hehe you dumb🤣🤣"},
    {_id:"3",title:"How Are You,is it true that you are dumb and every one uses you , hehe you dumb🤣🤣"},
  
]
const popularTags = [
    {_id:"1",name:"OWASP TCET",totalQuestions:25},
    {_id:"2",name:"CyberSecurity",totalQuestions:8},
    {_id:"5",name:"CS&E Department",totalQuestions:9999},
    {_id:"4",name:"NextJs",totalQuestions:38},
    {_id:"3",name:"NodeJs",totalQuestions:15},
  
]
const RightSidebar = () => {


    
      return (
    <section className='background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 flex h-screen w-[350px] flex-col overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden'>
        

        <div>
            <h3 className='h3-bold text-dark200_light900 '>Top Questions</h3>

            <div className="mt-7 flex w-full flex-col gap-[30px]">

                {hotQuestions.map((question)=>(
                    <Link href={`/questions/${question._id}`} key={question._id} className='flex cursor-pointer items-center justify-between gap-7 '><p className='body-medium text-dark500_light700 '>{question.title}</p>
                    <Image src={"/assets/icons/chevron-right.svg"} width={20}height={20} alt='chevron-right' className='invert-colors'/>
                    </Link>
                ))}
            </div>
        </div>
        <div className='mt-16'>
            <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
            <div className="mt-7 flex flex-col gap-4">
                {popularTags.map((tag) =>(
                    <RenderTag key={tag._id}
                    _id= {tag._id}
                    name={tag.name}
                    totalQuestions={tag.totalQuestions}
                    showCount/>
                ))
}

            </div>
        </div>
    </section>
  )
}

export default RightSidebar