import Ellipsis from "./Ellipsis.vue";

export default { title: "Ellipsis" };

export const EllipsisStory = () => ({
    components: { Ellipsis },
    template:
        "<Ellipsis name='test'>"
});


export const EllipsisStoryReallyLargeText = () => ({
    components: { Ellipsis },
    template:
        "<Ellipsis name='em ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer'>"
});


export const EllipsisStoryReallyLargeTextWidth50px = () => ({
    components: { Ellipsis },
    template:
        "<Ellipsis name='em ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exer' width='50px'>"
});