<script lang="tsx">
import { defineComponent, ref } from "vue";

const ChildCom = (props, { slots }) => {
    return <div>{(slots.default && slots.default()) || "123"}</div>;
};
export default defineComponent({
    name: "bo-input",
    setup(props, ctx) {
        const num = ref(3);
        return () => (
            <div>
                <ChildCom>{() => "Hello12"}</ChildCom>
                <ul>
                    <ol style={num.value === 3 ? "color:red" : "color:green"}>Hello World1</ol>
                    <ol
                        onClick={() => {
                            num.value = num.value + 1;
                        }}
                    >
                        Hello World2
                    </ol>
                    <ol v-model={num}>Hello World3-- {num.value} --</ol>
                    <ol>Hello World4</ol>
                    <ol style={num.value === 2 ? "color:red" : "color:green"}>Hello World5</ol>
                </ul>
            </div>
        );
    }
});
</script>
