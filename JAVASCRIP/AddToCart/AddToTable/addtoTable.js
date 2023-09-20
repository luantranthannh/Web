var id = 0;
        function sell() {
            id++;
            var pname = frm.pname.value;
            var qty = frm.qty.value;
            var price = frm.up.value;
            var dc = frm.dc.value;
            var sub = qty * price * (1 - dc / 100);

            var row = "<tr>";
            row += "<td>" + id + "</td>";
            row += "<td>" + pname + "</td>";
            row += "<td>" + qty + "</td>";
            row += "<td>" + price + "</td>";
            row += "<td>" + dc + "</td>";
            row += "<td>$" + sub + "</td>";
            row += "<td><button onclick='removeRow(this)'>Remove</button></td>";
            row += "</tr>";


            document.getElementById('tbl').innerHTML += row;

        }

        function cancell() {
            frm.pname.value = "";
            frm.qty.value = "";
            frm.up.value = "";
            frm.dc.value = "";
        }
        
        function removeRow(button) {
            var row = button.closest('tr');
            if (row) {
                row.remove();
            }

            
        }