export default{
    name:"view_enum",
    functional:true,
    props:{
        data:{
            type:[Number,String],
        },
        enums:{
            type:Object,
            required:true,
        }
    },
    render(h,{props}){
        const {
            data,
            enums
        } = props;
        return (
            <span>{enums[data]}</span>
        )
    }
}
