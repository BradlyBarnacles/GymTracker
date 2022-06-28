


    import Card from "./Card.svelte";

    export default {
  
        title: 'Card',
        component: Card,
      };
      
      
      const Template = (args)=>({
        component: Card,
        props: args,
      });
      
      //👇 Each story then reuses that template
      export const Primary = Template.bind({});
      Primary.args = {
        title: "hello",
      };