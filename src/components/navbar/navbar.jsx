import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import ModalCadastraProduto from '../CadastrarProduto/cadastrarProduto.jsx'; // Importe o componente ModalCadastraProduto
import CollapsibleTable from '../modalEditarCliente/modalEditarCliente.jsx' ; // Importe o componente CollapsibleTable
import ModalCadastraTipoDeSerico from '../cadastrarTipoDeServico/cadastrarTipoDeServico.jsx'; // Importe o componente ModalCadastraTipoDeServico

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [cadastrarTipoDeServico, setCadastrarTipoDeServico] = useState(false);

  const [showTable, setShowTable] = useState(false); // Estado para controlar a exibição da tabela

  const [cadProduto, setCadProduto] = useState(false); // Estado para controlar a exibição do modal de cadastro de produto

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleOpenModalClientes = () => {
    // Verifica se a tabela está sendo exibida
    if (showTable) {
      // Se estiver sendo exibida, fecha a tabela
      setShowTable(false);
    } else {
      // Caso contrário, exibe a tabela
      setShowTable(true);
      handleCloseNavMenu(); // Fecha o menu de navegação após clicar em "Clientes"
    }
  };

 

  const handleOpenModalServicos = () => {
    handleCloseNavMenu(); // Fecha o menu de navegação após clicar em "Serviços"
  };

  const handleOpenModalDespesas = () => {
    handleCloseNavMenu(); // Fecha o menu de navegação após clicar em "Despesas"
  };

  // Função para abrir e fechar o modal de cadastro de produto
  const handleOpenModalCadastrarProduto = () => {
    if (cadProduto) {
      setCadProduto(false);
    } else {  
      setCadProduto(true);
    }
    handleCloseNavMenu(); 
    // Fecha o menu de navegação após clicar em "Cadastrar Produto"
  }
  const handleCloseModalCadastrarProduto = () => {
    setCadProduto(false); // Função para fechar o modal de cadastro de produto
  };

  const handleOpenModalCadastrarTipoDeServico = () => {
    if (cadProduto) {
      setCadastrarTipoDeServico(false);
    } else {  
      setCadastrarTipoDeServico(true);
    }
    handleCloseNavMenu(); 
    // Fecha o menu de navegação após clicar em "Cadastrar Produto"
  }
  const handleCloseModalCadastrarTipoDeServico = () => {
    setCadastrarTipoDeServico(false); // Função para fechar o modal de cadastro de produto
  };
  

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem onClick={handleOpenModalClientes}>Clientes</MenuItem>
              <MenuItem onClick={handleOpenModalServicos}>Serviços</MenuItem>
              <MenuItem onClick={handleOpenModalDespesas}>Despesas</MenuItem>
              <MenuItem onClick={handleOpenModalCadastrarProduto}>Cadastrar Produto</MenuItem>
              <MenuItem onClick={handleOpenModalCadastrarTipoDeServico}>Cadastrar Itens do Serviço</MenuItem>
             
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button onClick={handleOpenModalClientes} sx={{ my: 2, color: 'white', display: 'block' }}>Clientes</Button>
            <span>
              <Button onClick={handleOpenModalServicos} sx={{ my: 2, color: 'white', display: 'block' }}>Serviços</Button>
            </span>
            <span>
              <Button onClick={handleOpenModalDespesas} sx={{ my: 2, color: 'white', display: 'block' }}>Despesas</Button>
            </span>
            <span>
            <Button onClick={handleOpenModalCadastrarProduto} sx={{ my: 2, color: 'white', display: 'block' }}>Cadastrar Produto</Button>
            </span>
            <span>
            <Button onClick={handleOpenModalCadastrarTipoDeServico} sx={{ my: 2, color: 'white', display: 'block' }}>Cadastrar Itens do Serviço</Button>
            </span>

          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="user-menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
           
          </Box>
        </Toolbar>
      </Container>
      {/* Renderiza a tabela se showTable for verdadeiro */}
      {showTable && <CollapsibleTable />}

      {/* Renderiza o modal de cadastro de produto se cadProduto for verdadeiro */}
      {cadProduto && <ModalCadastraProduto open={true} onClose={handleCloseModalCadastrarProduto} />}
      {cadastrarTipoDeServico && <ModalCadastraTipoDeSerico open={true} onClose={handleCloseModalCadastrarTipoDeServico} />}
    </AppBar>
  );
}
export default ResponsiveAppBar;
