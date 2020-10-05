import React, { useState } from 'react'

import {
  Table, TableBody, TableCell, TableHead, TableRow, Typography,
} from '@material-ui/core'

import { FilterBox } from '../../../../../src/components/filter-box'

interface TestDataType {
  id: string,
  name: string,
  email: string,
  phone: string,
}

const testList = [
  {
    name: 'Zenia K. Owen', email: 'ligula.Nullam@eleifend.edu', phone: '(03918) 0674336', id: '16561224 0639',
  },
  {
    name: 'Ingrid Neal', email: 'ac.ipsum.Phasellus@egestasAliquam.net', phone: '(0330) 82217796', id: '16610910 1714',
  },
  {
    name: 'Cassandra J. Nash', email: 'vel@tellus.net', phone: '(0223) 02341717', id: '16680111 5038',
  },
  {
    name: 'Buffy A. Price', email: 'In.tincidunt.congue@vel.net', phone: '(03241) 4563689', id: '16951113 0024',
  },
  {
    name: 'Cullen I. Ellison', email: 'sed.sem.egestas@fermentumfermentum.org', phone: '(006) 79892999', id: '16020627 8160',
  },
  {
    name: 'Luke C. Higgins', email: 'Sed.id.risus@quamafelis.ca', phone: '(0378) 60150628', id: '16431018 8091',
  },
  {
    name: 'Sebastian Harrell', email: 'et.ultrices.posuere@libero.net', phone: '(06113) 1136452', id: '16780108 8183',
  },
  {
    name: 'Bernard Koch', email: 'justo.faucibus.lectus@velit.org', phone: '(034158) 929943', id: '16301024 6761',
  },
  {
    name: 'Ryan Santiago', email: 'Sed.pharetra@erateget.org', phone: '(0560) 08965922', id: '16070515 4557',
  },
  {
    name: 'Brent J. Morgan', email: 'commodo.tincidunt@Uttinciduntorci.ca', phone: '(032342) 665254', id: '16820712 4838',
  },
  {
    name: 'Amela T. Marshall', email: 'dolor.Nulla@tinciduntdui.com', phone: '(04083) 0766199', id: '16250523 6303',
  },
  {
    name: 'Alice X. Blankenship', email: 'Cras@pellentesque.com', phone: '(0346) 72817199', id: '16461224 2489',
  },
  {
    name: 'Aline H. Knight', email: 'urna.justo.faucibus@dolor.ca', phone: '(0368) 54381839', id: '16560105 2037',
  },
  {
    name: 'Wyatt Chang', email: 'posuere.vulputate@commodoauctor.ca', phone: '(08097) 5241468', id: '16500212 2041',
  },
  {
    name: 'Avram E. Wall', email: 'feugiat@nullaInteger.com', phone: '(0814) 60431634', id: '16350723 0278',
  },
  {
    name: 'Briar U. Pollard', email: 'neque.In.ornare@Maecenas.co.uk', phone: '(074) 61908474', id: '16121003 9069',
  },
  {
    name: 'Inga G. Torres', email: 'hendrerit.Donec@luctuslobortisClass.com', phone: '(032) 99376076', id: '16791108 3140',
  },
  {
    name: 'Lane Gibbs', email: 'eu.erat.semper@ullamcorpermagna.ca', phone: '(039) 02082225', id: '16470312 0131',
  },
  {
    name: 'Orson N. Little', email: 'eget.nisi.dictum@massaQuisqueporttitor.org', phone: '(078) 66524160', id: '16220414 2885',
  },
  {
    name: 'Brittany Holloway', email: 'dictum.mi.ac@Vivamus.org', phone: '(021) 25609828', id: '16641114 0665',
  },
  {
    name: 'Danielle Hester', email: 'facilisi@porttitoreros.net', phone: '(0690) 26748132', id: '16280721 2077',
  },
  {
    name: 'Cody Clemons', email: 'neque.tellus.imperdiet@duiSuspendisseac.net', phone: '(05058) 0773676', id: '16621013 1824',
  },
  {
    name: 'Elmo O. Hampton', email: 'elit.fermentum@Fuscedolor.net', phone: '(059) 06082610', id: '16070116 6845',
  },
  {
    name: 'Kuame Avery', email: 'dui.quis@quis.co.uk', phone: '(0938) 22879028', id: '16080311 4065',
  },
  {
    name: 'Irene U. Hess', email: 'quis@aliquetmolestietellus.net', phone: '(0025) 16287291', id: '16500711 8267',
  },
  {
    name: 'Amity Kent', email: 'dictum.Phasellus@massaSuspendisseeleifend.com', phone: '(0870) 53456545', id: '16850716 9392',
  },
  {
    name: 'Jack Houston', email: 'ut@egestas.ca', phone: '(037572) 115108', id: '16730330 9897',
  },
  {
    name: 'Ryder I. Mcconnell', email: 'pede.blandit@diamProin.ca', phone: '(0810) 27760824', id: '16371029 5365',
  },
  {
    name: 'Sharon Farmer', email: 'gravida.non.sollicitudin@eu.edu', phone: '(022) 89685240', id: '16660611 1844',
  },
  {
    name: 'Steel Compton', email: 'facilisis.eget.ipsum@non.co.uk', phone: '(0378) 64882040', id: '16630718 4223',
  },
  {
    name: 'Nash J. Medina', email: 'Phasellus.dolor.elit@necanteMaecenas.edu', phone: '(032266) 219286', id: '16280316 2466',
  },
  {
    name: 'Amal Glover', email: 'mollis@turpisIncondimentum.edu', phone: '(00327) 5399831', id: '16351002 4361',
  },
  {
    name: 'Lani Rocha', email: 'Nulla.aliquet.Proin@est.com', phone: '(06234) 9091597', id: '16280519 4566',
  },
  {
    name: 'Catherine Mcneil', email: 'commodo.tincidunt@odio.net', phone: '(0167) 72337890', id: '16660226 0827',
  },
  {
    name: 'Cheyenne Dudley', email: 'tincidunt.neque.vitae@tinciduntcongue.net', phone: '(0435) 14174602', id: '16381209 4971',
  },
  {
    name: 'Cadman Z. Chen', email: 'felis.Donec@lectusrutrumurna.com', phone: '(086) 65094040', id: '16290813 5441',
  },
  {
    name: 'Ronan Wright', email: 'interdum.libero.dui@sollicitudinorcisem.edu', phone: '(093) 90177849', id: '16780410 1520',
  },
  {
    name: 'Olivia Hansen', email: 'Nulla@aarcu.com', phone: '(0152) 04323020', id: '16910530 9604',
  },
  {
    name: 'Rigel S. Pace', email: 'quis.diam.luctus@lorem.edu', phone: '(09955) 3151115', id: '16151102 2269',
  },
  {
    name: 'Jolie Pace', email: 'nisi@netuset.edu', phone: '(05717) 4392674', id: '16150712 5472',
  },
  {
    name: 'Tana Hayden', email: 'porttitor@mi.ca', phone: '(035726) 506129', id: '16950312 0249',
  },
  {
    name: 'Isaiah V. Pratt', email: 'interdum.feugiat.Sed@euerat.com', phone: '(0074) 42538333', id: '16670916 2611',
  },
  {
    name: 'Yuri Lamb', email: 'nec.tellus@hendrerit.net', phone: '(030) 53022698', id: '16651115 8641',
  },
  {
    name: 'Tanya L. Stewart', email: 'ac.turpis@Suspendisse.ca', phone: '(0959) 80034281', id: '16600812 4197',
  },
  {
    name: 'Lillian A. Snyder', email: 'elementum.dui@imperdieterat.org', phone: '(059) 38697418', id: '16030629 6500',
  },
  {
    name: 'MacKenzie Q. Henry', email: 'laoreet.posuere.enim@Integeraliquam.edu', phone: '(031553) 352807', id: '16621125 8741',
  },
  {
    name: 'Hyatt U. Salas', email: 'libero@Sedeueros.co.uk', phone: '(033272) 147107', id: '16940805 5524',
  },
  {
    name: 'Genevieve Farley', email: 'non.lorem.vitae@magnaetipsum.co.uk', phone: '(04013) 0887077', id: '16791113 6534',
  },
  {
    name: 'Heidi Wilder', email: 'enim.diam.vel@sedpede.org', phone: '(049) 93221537', id: '16231208 7675',
  },
  {
    name: 'Sigourney Ayala', email: 'magna.malesuada.vel@dignissim.edu', phone: '(0588) 23569041', id: '16370519 9325',
  },
  {
    name: 'Macaulay R. Ayers', email: 'ornare.sagittis@sit.ca', phone: '(034566) 892282', id: '16430110 4487',
  },
  {
    name: 'Jacob Clark', email: 'vitae.velit@atlacus.org', phone: '(0060) 95919961', id: '16050315 1490',
  },
  {
    name: 'Tarik Shields', email: 'ligula.eu@elementum.edu', phone: '(016) 98085190', id: '16930704 2698',
  },
  {
    name: 'Elvis Dunlap', email: 'adipiscing@convallisantelectus.net', phone: '(038753) 415870', id: '16040524 6992',
  },
  {
    name: 'Vincent Powers', email: 'odio.Aliquam.vulputate@leo.ca', phone: '(015) 37736763', id: '16690422 3531',
  },
  {
    name: 'Kevin Roth', email: 'gravida@Praesenteudui.edu', phone: '(031574) 405405', id: '16551204 7589',
  },
  {
    name: 'Indira Atkins', email: 'fermentum.convallis.ligula@enimmitempor.com', phone: '(030984) 186257', id: '16970123 9734',
  },
  {
    name: 'Sydnee Harrell', email: 'Suspendisse.non.leo@sociis.ca', phone: '(076) 95689045', id: '16520310 9789',
  },
  {
    name: 'Nicole V. Witt', email: 'arcu.Vestibulum.ut@anteVivamusnon.net', phone: '(0661) 48720612', id: '16600729 9099',
  },
  {
    name: 'Myra Ballard', email: 'Praesent.luctus.Curabitur@lacusMauris.edu', phone: '(037919) 286526', id: '16671009 5214',
  },
  {
    name: 'Noble Q. Sexton', email: 'Cras.dolor.dolor@Aliquam.edu', phone: '(0897) 54973949', id: '16240923 7688',
  },
  {
    name: 'Moana Winters', email: 'bibendum@maurisMorbi.net', phone: '(0131) 07561507', id: '16170222 4278',
  },
  {
    name: 'Jaden Cook', email: 'Integer.aliquam.adipiscing@nibh.edu', phone: '(031643) 899831', id: '16430815 6217',
  },
  {
    name: 'Nita H. Dalton', email: 'risus.Morbi@Maurisnon.com', phone: '(01208) 5940110', id: '16131203 8894',
  },
  {
    name: 'Hakeem U. Odonnell', email: 'bibendum.sed.est@nunc.edu', phone: '(000) 30320774', id: '16750929 6724',
  },
  {
    name: 'Xantha M. Mccarty', email: 'mattis@elementumategestas.edu', phone: '(0482) 60523628', id: '16580111 6459',
  },
  {
    name: 'Guinevere D. Marshall', email: 'dictum@CurabiturdictumPhasellus.co.uk', phone: '(033165) 888436', id: '16501022 6685',
  },
  {
    name: 'May H. Erickson', email: 'magna.Duis@nondapibus.co.uk', phone: '(06697) 9005162', id: '16821025 8987',
  },
  {
    name: 'Danielle T. Curtis', email: 'turpis.vitae.purus@lobortisultricesVivamus.edu', phone: '(02358) 2251020', id: '16430429 8823',
  },
  {
    name: 'Channing Valenzuela', email: 'Nulla.dignissim.Maecenas@dictum.ca', phone: '(0273) 76753496', id: '16250928 1149',
  },
  {
    name: 'Kiona G. Garza', email: 'Morbi@variusultrices.net', phone: '(031392) 725523', id: '16690209 9768',
  },
  {
    name: 'Astra M. Mcconnell', email: 'non@congueelitsed.com', phone: '(01150) 0649585', id: '16041125 2448',
  },
  {
    name: 'Hilary Baxter', email: 'libero@hendreritDonecporttitor.net', phone: '(0662) 39652888', id: '16740925 7008',
  },
  {
    name: 'Reese I. Vazquez', email: 'lacus.varius@congueaaliquet.ca', phone: '(0655) 49932072', id: '16830803 4050',
  },
  {
    name: 'Nita Dejesus', email: 'elit.pellentesque.a@pulvinararcuet.edu', phone: '(0846) 76343857', id: '16150820 1066',
  },
  {
    name: 'Brennan Cabrera', email: 'cursus.diam@euismodest.edu', phone: '(090) 70077423', id: '16560419 6617',
  },
  {
    name: 'Kimberley O. Pope', email: 'auctor.velit@vulputate.co.uk', phone: '(0893) 41848666', id: '16340911 7912',
  },
  {
    name: 'Flynn Stout', email: 'in.lobortis@Proinnisl.com', phone: '(04431) 7399072', id: '16960920 4947',
  },
  {
    name: 'Juliet Blankenship', email: 'egestas@enim.edu', phone: '(065) 20987224', id: '16201217 1423',
  },
  {
    name: 'Inez K. Callahan', email: 'tristique@velvenenatisvel.edu', phone: '(09720) 8065613', id: '16331202 5533',
  },
  {
    name: 'Elton Z. Buckner', email: 'nec@interdumfeugiat.ca', phone: '(036796) 452008', id: '16740329 9725',
  },
  {
    name: 'Blaze Benjamin', email: 'lacus@at.co.uk', phone: '(072) 41268801', id: '16370308 4354',
  },
  {
    name: 'Murphy Pearson', email: 'nascetur@mollisnec.edu', phone: '(0276) 71793827', id: '16400214 4816',
  },
  {
    name: 'Noelle L. Joyner', email: 'et@Integer.net', phone: '(0825) 25009640', id: '16770824 0341',
  },
  {
    name: 'Hayfa Wheeler', email: 'amet.consectetuer.adipiscing@atnisiCum.co.uk', phone: '(03944) 3762854', id: '16350603 8805',
  },
  {
    name: 'Ezra K. Barker', email: 'Donec.sollicitudin@duinec.com', phone: '(055) 84165281', id: '16210630 0615',
  },
  {
    name: 'Amy S. Barrera', email: 'metus.vitae@tristique.net', phone: '(037247) 889982', id: '16030912 0079',
  },
  {
    name: 'Kitra Griffin', email: 'diam@gravida.org', phone: '(01247) 3027981', id: '16210624 6099',
  },
  {
    name: 'Oren S. Vincent', email: 'lorem@risusInmi.co.uk', phone: '(061) 38263576', id: '16680405 2352',
  },
  {
    name: 'Jelani D. Greer', email: 'primis.in.faucibus@sitametorci.org', phone: '(0345) 77090972', id: '16490301 7939',
  },
  {
    name: 'Winifred G. Montgomery', email: 'natoque.penatibus.et@Duisrisus.org', phone: '(037928) 644140', id: '16130310 6031',
  },
  {
    name: 'Isaiah I. Peterson', email: 'gravida.non.sollicitudin@magna.edu', phone: '(039285) 083607', id: '16010711 3458',
  },
  {
    name: 'Moses G. Craft', email: 'augue.malesuada.malesuada@fringilla.co.uk', phone: '(04875) 6857549', id: '16440229 6398',
  },
  {
    name: 'Trevor Ward', email: 'ligula@loremegetmollis.org', phone: '(076) 34608313', id: '16030725 8905',
  },
  {
    name: 'Mira Barnett', email: 'Vestibulum@id.ca', phone: '(031219) 374056', id: '16410324 1099',
  },
  {
    name: 'Arden Woods', email: 'condimentum.Donec.at@acorci.com', phone: '(0640) 16497668', id: '16740103 1682',
  },
  {
    name: 'Anika I. Emerson', email: 'sit.amet@ridiculus.com', phone: '(05580) 3370401', id: '16820129 5469',
  },
  {
    name: 'Neville H. Hess', email: 'vitae.sodales@sapienimperdietornare.co.uk', phone: '(024) 31273383', id: '16390105 9828',
  },
  {
    name: 'Abigail Wagner', email: 'auctor.non@nonenimMauris.co.uk', phone: '(036250) 453668', id: '16630408 1034',
  },
  {
    name: 'Nomlanga R. Gates', email: 'diam.at.pretium@adipiscingelitEtiam.edu', phone: '(05898) 5312014', id: '16060719 1533',
  },
]

const testFilters: (keyof TestDataType)[] = ['name', 'email']

const DemoFilterBoxWithResultList = (args) => {
  const [filteredItems, setFilteredItems] = useState([] as TestDataType[])
  return (
    <div style={{ border: '1px solid grey', padding: '8px' }}>
      <FilterBox<TestDataType>
        filterBy={testFilters}
        items={testList}
        setFilteredItems={setFilteredItems}
        placeholder="Filter by name or email"
        {...args}
      />
      <Typography variant="h3">
        Filtered list (clear search term for full list)
      </Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredItems.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.phone}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export { DemoFilterBoxWithResultList }
