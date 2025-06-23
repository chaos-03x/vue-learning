import axios from "axios";
import { reactive } from "vue";

export default function () {
    let dogList = reactive([])

    async function getDog() {
        let result = await axios.get('https://dog.ceo/api/breed/pembroke/images/random')
        console.log(`axios.get return:${result.data}`);
        dogList.push(result.data.message)
    }

    // 向外部提供东西
    return {dogList, getDog}
}