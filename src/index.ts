import Mensagens from './utils/Mensagens';
import Calculadora from './utils/Calculadora';

const msgs = new Mensagens()
const calculadora = new Calculadora()

msgs.boasVindas()
msgs.listarOpcoes()
msgs.comoUsar()

calculadora.iniciar()