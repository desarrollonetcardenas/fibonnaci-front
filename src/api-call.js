export class apiCall {
    getFibonnaci = () => {
        var req = new XMLHttpRequest();
        const value = document.getElementById('txtValue').value;
        const url = 'http://127.0.0.1';
        const port = '2020' || '3030';

        req.open('GET', `${url}:${port}/calculate-fibonnaci/${value}`, false);

        req.onreadystatechange = (res) => {
            if (req.readyState === 4) {
                if (req.status === 200) {
                    const response = JSON.parse(req.response);
                    console.log(response);
                    document.getElementById('lblResult').innerHTML = response.result;
                }
            }
        };

        req.send(null);
    };
}